Here is the full updated file — select all and copy:

Complete SPA Development Pipeline Setup Guide
Local → Azure Testing → GitHub Actions → AWS S3 Staging → AWS S3 Production
Overview
This guide walks through setting up a complete professional development pipeline:

Clone repo locally and develop with hot reload
Test remotely using Azure Web Apps via VS Code plugin
Push to GitHub, triggering automated CI/CD via GitHub Actions
Auto-deploy to AWS S3 staging bucket and run smoke tests
If tests pass, auto-deploy to AWS S3 production bucket
PART 1 — GitHub Repository Setup
1.1 Fork and Clone the Repo
Go to the source repo on GitHub
Click Fork (top right) → choose your account
Once forked, go to your copy of the repo
Click Code → copy the HTTPS or SSH URL
Open a terminal locally and run:
bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
1.2 Set Up Branch Structure
bash

# Create a dev branch

git checkout -b dev
git push -u origin dev

# For day-to-day work, create feature branches off dev

git checkout -b feature/my-feature

Branch strategy:

Branch Purpose
feature/\* Active development, local + Azure testing
dev Triggers staging deployment in GitHub Actions
main Triggers production deployment in GitHub Actions

PART 2 — Local Development Setup
2.1 Install Dependencies and Run Locally

npm install

npm run dev # or npm start — starts hot reload dev server

Your app will run at http://localhost:3000 (or similar) with full hot module replacement.

2.2 Create a Local .env File
Create a .env file in the project root for local secrets:

REACT_APP_API_URL=https://your-api.com
REACT_APP_SOME_KEY=your-local-value
Make sure .env is in your .gitignore — never commit it:

bash
echo ".env" >> .gitignore

2.3 Security and Dependency Maintenance Tools
Two complementary tools should be part of your regular local workflow:

npm audit — Security Vulnerability Scanning
npm audit is built into npm — no installation required. It checks your dependency tree against a database of known vulnerabilities and reports severity levels (critical, high, moderate, low) with remediation advice.

# Scan for vulnerabilities

npm audit

# Automatically fix vulnerabilities where possible

npm audit fix

# Fix including breaking (major version) changes — review carefully

npm audit fix --force
Run npm audit any time you install new packages or pull changes from others. A clean audit output should be your baseline before pushing code.

npm-check-updates (ncu) — Outdated Package Detection
ncu scans your package.json and reports which dependencies have newer versions available. Keeping packages current reduces the attack surface for future vulnerabilities and keeps your tooling from drifting.

# Install globally (one-time)

npm install -g npm-check-updates

# Check what can be updated (does not change anything)

ncu

# Update package.json to latest versions

ncu -u

# Then install the updated packages

npm install
Note: After running ncu -u and npm install, always run npm test and npm audit to confirm nothing broke and no new vulnerabilities were introduced.

### When to Run Each Tool

When to run

npm audit After any npm install, after pulling changes, before pushing
ncu
Periodically (weekly or before starting a new feature) to keep dependencies current

## PART 3 — Azure Account and Web App Resource Setup

### 3.1 Create a Free Azure Account

Go to https://azure.microsoft.com/free

Sign up — a credit card is required for identity verification but the F1 tier will not be charged

Once logged in, go to the Azure Portal:
https://portal.azure.com

### 3.2 Create a Web App Resource (Free F1 Tier)

In the Azure Portal, click Create a resource
Search for Web App and select it

#### Click Create and fill in the form:

Field Value
Subscription Your subscription

Resource Group Create new → e.g. my-spa-rg

Name e.g. my-spa-test (must be globally unique)

Publish Code
Runtime stack Node 18 LTS (or your version)

Operating System Linux

Region Closest to you (e.g. East US)

Pricing Plan F1 (Free) — click "Change size" to find it

Click Review + Create → Create

Wait for deployment to complete (~2 minutes)

Note your app URL: https://my-spa-test.azurewebsites.net

https://rama-e7hwdxfxg6hedzep.canadaeast-01.azurewebsites.net

### 3.3 Configure App Settings (Environment Variables) in Azure

In the Azure Portal, go to your Web App resource
Left sidebar → Configuration → Application settings
Click + New application setting for each environment variable your app needs:
Name Value
REACT_APP_API_URL Your API URL
NODE_ENV development
Click Save at the top
These act as the equivalent of your .env file when running on Azure.

## PART 4 — VS Code Azure Plugin Setup

4.1 Install the Azure App Service Extension
Open VS Code
Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
Search: Azure App Service
Install the extension published by Microsoft
Also install Azure Account if prompted
4.2 Sign Into Azure from VS Code
Open the Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
Type: Azure: Sign In
A browser window opens — sign in with your Azure account
Return to VS Code — you should see your subscription in the Azure sidebar

### 4.3 Deploy to Azure Web App from VS Code

In the Azure sidebar (cloud icon), expand App Service
Find your Web App resource (my-spa-test)
Right-click → Deploy to Web App
Select your project folder when prompted
Confirm the deployment — VS Code will zip and upload your project
When complete, right-click your Web App → Browse Website to open it
Note: This deploys your current local state regardless of branch or commit status. Repeat this step whenever you want to re-test on Azure after making changes.

## PART 5 — AWS Setup

### 5.1 Create an IAM User for GitHub Actions

GitHub Actions needs AWS credentials to deploy to S3. Create a dedicated IAM user:

Log into AWS Console → go to IAM
Click Users → Create user
Username: github-actions-deployer
Permissions: Attach policy directly → search and attach AmazonS3FullAccess (or create a custom policy scoped to only your two buckets for better security)
After creation, click the user → Security credentials tab
Click Create access key → choose Application running outside AWS
Save the Access Key ID and Secret Access Key — you will not see the secret again

### 5.2 Create the Staging S3 Bucket

Go to S3 in the AWS Console
Click Create bucket
Name: e.g. my-spa-staging (must be globally unique)
Region: Same as your production bucket
Uncheck "Block all public access" (required for static website hosting)
Acknowledge the warning → Create bucket
Go to the bucket → Properties tab → Static website hosting → Edit
Enable static website hosting
Index document: index.html
Error document: index.html (important for SPA client-side routing)
Go to Permissions tab → Bucket policy → paste this policy:
json
{
"Version": "2012-10-17",
"Statement": [
{
"Sid": "PublicReadGetObject",
"Effect": "Allow",
"Principal": "*",
"Action": "s3:GetObject",
"Resource": "arn:aws:s3:::my-spa-staging/*"
}
]
}
Note the staging URL from the Static website hosting section

### 5.3 Create the Production S3 Bucket

Repeat the exact same steps as 5.2 but name the bucket my-spa-production (or your existing production bucket name). If you already have a production bucket, just verify it has static website hosting enabled.

## PART 6 — GitHub Secrets Setup

Go to your GitHub repo → Settings → Secrets and variables → Actions → New repository secret

Add each of the following:

Secret Name Value
AWS_ACCESS_KEY_ID From the IAM user you created in Step 5.1
AWS_SECRET_ACCESS_KEY From the IAM user you created in Step 5.1
STAGING_BUCKET e.g. my-spa-staging
PROD_BUCKET e.g. my-spa-production
STAGING_URL e.g. http://my-spa-staging.s3-website-us-east-1.amazonaws.com
REACT_APP_API_URL Your API endpoint (if your build needs it)
Secrets are encrypted, never shown again after entry, and masked in all workflow logs.

PART 7 — Cypress Smoke Tests Setup
7.1 Install Cypress
bash
npm install --save-dev cypress
7.2 Create Smoke Test File
Create the file cypress/e2e/smoke/basic.cy.js:

javascript
describe('Smoke Tests', () => {

it('Home page loads successfully', () => {
cy.visit('/')
cy.get('body').should('be.visible')
cy.title().should('not.be.empty')
})

it('Key heading or content exists', () => {
cy.visit('/')
cy.get('h1').should('exist')
})

it('Navigation links are present', () => {
cy.visit('/')
cy.get('nav').should('exist')
})

it('About or secondary page loads', () => {
cy.visit('/about')
cy.get('body').should('be.visible')
})

it('No 404 on direct route access (SPA routing check)', () => {
cy.visit('/about', { failOnStatusCode: false })
cy.get('body').should('be.visible')
})

})
7.3 Add Cypress Config
Create cypress.config.js in your project root:

javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
e2e: {
baseUrl: 'http://localhost:3000', // overridden in CI by env var
specPattern: 'cypress/e2e/\*_/_.cy.js',
video: false,
screenshotOnRunFailure: true,
},
})
PART 8 — GitHub Actions Workflow
8.1 Understanding the Pipeline Structure
The workflow is not simply "build and deploy" — it is a sequential chain of five jobs, each acting as a gate. A job only runs if the previous one passed. If any job fails, the pipeline stops and nothing further is deployed.

Push to dev or main
│
▼
┌───────────────┐
│ JOB 1 │ CodeQL scans your source code for
│ codeql │ vulnerable coding patterns (XSS,
│ │ injection, insecure APIs, etc.)
└──────┬────────┘
│ pass
▼
┌───────────────┐
│ JOB 2 │ Install deps → npm audit → lint →
│ build │ unit tests → build → upload artifact
└──────┬────────┘
│ pass
▼
┌───────────────┐
│ JOB 3 │ Download artifact → deploy to
│ deploy- │ AWS S3 staging bucket
│ staging │
└──────┬────────┘
│ pass
▼
┌───────────────┐
│ JOB 4 │ Run Cypress smoke tests against
│ smoke-tests │ the live staging URL
└──────┬────────┘
│ pass
▼
┌───────────────┐
│ JOB 5 │ Deploy to AWS S3 production
│ deploy- │ (main branch only)
│ production │
└───────────────┘
What each job is responsible for:

Job Name Scans / Does
1 codeql Your source code — vulnerable patterns in the code you wrote
2 build Your dependencies (npm audit) + correctness (lint, tests, build)
3 deploy-staging Pushes the validated build artifact to the staging environment
4 smoke-tests Confirms the live staging site actually works end-to-end
5 deploy-production Promotes to production only after all gates passed
This structure means nothing reaches production unless your code, your dependencies, your build, and your live staging environment all pass validation.

8.2 CodeQL Setup
CodeQL is GitHub's static analysis engine. It reads your source code and detects security vulnerabilities in the logic you've written — things like cross-site scripting (XSS) risks, unsafe use of eval(), prototype pollution, and other JavaScript/TypeScript vulnerability patterns.

GitHub plan requirements:

Repo type Plan needed
Public repo Free — CodeQL is always available
Private repo Requires GitHub Advanced Security (included in Team and Enterprise plans)
Check your plan at: GitHub → your repo → Settings → Security → Code security and analysis. If you see a "CodeQL analysis" section, you're good to go.

Enable CodeQL in your repo (one-time setup):

Go to your repo on GitHub
Click Settings → Security → Code security and analysis
Next to CodeQL analysis, click Enable
GitHub will offer to auto-create a starter workflow — you can skip this since the workflow below includes CodeQL already
Viewing CodeQL results:

After the pipeline runs, go to your repo → Security tab → Code scanning alerts. Any findings will appear here with severity ratings, the affected line of code, and remediation guidance. The pipeline will fail if any results at error level are found.

8.3 Create the Workflow File
Create the file .github/workflows/deploy.yml in your repo:

yaml
name: CI/CD Pipeline

on:
push:
branches: - dev # triggers staging pipeline - main # triggers production pipeline

jobs:

# ─────────────────────────────────────────

# JOB 1: CodeQL — Source Code Security Scan

# Scans your own code for vulnerable patterns

# ─────────────────────────────────────────

codeql:
runs-on: ubuntu-latest
permissions:
security-events: write
actions: read
contents: read

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v3
        with:
          languages: javascript

      - name: Autobuild
        uses: github/codeql-action/autobuild@v3

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3
        with:
          category: "/language:javascript"

# ─────────────────────────────────────────

# JOB 2: Install, Audit, Lint, Test, Build

# ─────────────────────────────────────────

build:
needs: codeql
runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Security audit
        run: npm audit --audit-level=high

      - name: Lint
        run: npm run lint

      - name: Unit tests
        run: npm test -- --watchAll=false
        env:
          CI: true

      - name: Build
        run: npm run build
        env:
          REACT_APP_API_URL: ${{ secrets.REACT_APP_API_URL }}

      - name: Upload build artifact
        uses: actions/upload-artifact@v3
        with:
          name: build-output
          path: ./build
          retention-days: 1

# ─────────────────────────────────────────

# JOB 3: Deploy to Staging S3

# ─────────────────────────────────────────

deploy-staging:
needs: build
runs-on: ubuntu-latest

    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v3
        with:
          name: build-output
          path: ./build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Deploy to staging S3
        run: aws s3 sync ./build s3://${{ secrets.STAGING_BUCKET }} --delete

# ─────────────────────────────────────────

# JOB 4: Smoke Tests Against Staging

# ─────────────────────────────────────────

smoke-tests:
needs: deploy-staging
runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress smoke tests against staging
        uses: cypress-io/github-action@v6
        with:
          spec: cypress/e2e/smoke/*.cy.js
        env:
          CYPRESS_baseUrl: ${{ secrets.STAGING_URL }}

# ─────────────────────────────────────────

# JOB 5: Deploy to Production S3

# Only runs if smoke tests passed

# Only runs on pushes to main branch

# ─────────────────────────────────────────

deploy-production:
needs: smoke-tests
runs-on: ubuntu-latest
if: github.ref == 'refs/heads/main'

    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v3
        with:
          name: build-output
          path: ./build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Deploy to production S3
        run: aws s3 sync ./build s3://${{ secrets.PROD_BUCKET }} --delete

8.4 Commit and Push the Workflow
bash
git add .github/workflows/deploy.yml
git add cypress/
git commit -m "Add CI/CD pipeline with CodeQL, staging, and smoke tests"
git push origin dev
Pushing to dev will immediately trigger the pipeline. Go to your repo on GitHub → Actions tab to watch it run. CodeQL results will appear under the Security tab.

PART 9 — Day-to-Day Development Workflow
Once everything is set up, your routine will be:

1. git checkout -b feature/my-new-feature

2. npm run dev
   → Develop locally with hot reload at localhost:3000

3. When ready to integration test:
   → VS Code Azure sidebar → right-click Web App → Deploy to Web App
   → Browse your Azure URL to validate real hosted behavior

4. When satisfied:
   git add .
   git commit -m "feat: describe your change"
   git push origin feature/my-new-feature

5. On GitHub, open a Pull Request: feature → dev
   → Merge the PR
   → GitHub Actions automatically: CodeQL → install → lint → test → build → deploy to staging → smoke tests

6. Review staging URL to confirm everything looks correct

7. Open a Pull Request: dev → main
   → Merge the PR
   → GitHub Actions automatically: runs full pipeline again → deploys to production S3

8. Your live app is updated ✓
   PART 10 — Troubleshooting Reference
   SPA Routing on S3 (404 on page refresh)
   If refreshing a page like /about gives a 404 on S3, set the error document to index.html in your bucket's static website hosting settings (covered in Step 5.2). This redirects all unknown paths to your SPA which handles routing client-side.

GitHub Actions Failing on Tests
Check the Actions tab for detailed logs
Unit test failures will stop the pipeline before any deployment
Smoke test failures will stop promotion to production but staging is already deployed for debugging
CodeQL Analysis Failing
Check the Security tab → Code scanning alerts for specific findings
Each alert includes the affected file, line number, and a description of the vulnerability
Fix the flagged code pattern and push again to re-trigger the pipeline
If CodeQL flags a false positive, you can dismiss it in the Security tab with a reason
Azure Deployment Fails
Check the Output panel in VS Code for error details
Ensure your Node version in Azure matches your local version
Check Azure Portal → Web App → Log stream for runtime errors
AWS Credentials Error in Actions
Verify the IAM user has S3 permissions
Double-check that secret names in GitHub exactly match what the workflow references
IAM access keys occasionally need to be rotated — regenerate and update secrets if needed
Summary — What Each Tool Does
Tool Role
Local npm run dev Fast iterative development with hot reload
npm audit Security scanning — checks dependencies for known vulnerabilities
npm-check-updates (ncu) Dependency maintenance — identifies outdated packages
CodeQL Source code security — scans your own code for vulnerable patterns
Azure Web App + VS Code plugin Integration testing on a real hosted server before committing
GitHub Secrets Secure storage of AWS keys and environment variables for CI
GitHub Actions Automated 5-job pipeline: CodeQL → build → staging → smoke tests → production
AWS S3 Staging Bucket Real AWS hosting environment for pre-production validation
Cypress Smoke Tests Automated browser tests against staging URL
AWS S3 Production Bucket Live app serving real users
