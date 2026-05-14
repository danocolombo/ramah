# Implementation Review Notes

## Findings

1. Dead source pages remain in the tree after the consolidation.
   - `src/components/CustomSoftwarePage.jsx`
   - `src/components/EnterprisePage.jsx`
   - `src/components/AWSFlash.jsx`
   
   These are not part of the current app import graph. The live routes in `src/components/App.jsx` redirect `/customsoftware` and `/enterprise` to `/engineering`, and there is no route or import for `AWSFlash`.

2. Copy files are present in the repo but are not used.
   - `src/components/P8ProjectPage copy.jsx`
   - `src/components/ui/header copy.jsx`
   
   These appear to be retained snapshots rather than implemented code.

3. Two footer links point to routes that are not implemented.
   - `src/components/ui/footer.jsx` links to `/woodshop`
   - `src/components/ui/footer.jsx` links to `/kitchen`
   
   There are no matching routes in `src/components/App.jsx`. The underlying display components are used on the landing page, but standalone pages for those paths are not implemented.

4. Some root files appear to be reference-only, not part of the running app.
   - `html-test.html`
   - `Overview.md`
   - `SPA-Pipeline-Setup-Guide-0.2.md`
   
   These do not appear in the app runtime path or current source imports. They may still be useful documentation, but they are not implemented application files.

## Likely Cleanup Candidates

Strong runtime/source cleanup candidates:

- `src/components/CustomSoftwarePage.jsx`
- `src/components/EnterprisePage.jsx`
- `src/components/AWSFlash.jsx`
- `src/components/P8ProjectPage copy.jsx`
- `src/components/ui/header copy.jsx`

## Assumptions

- This review is based on the current route table and import references in `src`.
- This is not a full unused-asset sweep across every image and animation file.
- There may still be dormant assets in `src/assets` and `src/animations`.

## Recommended Next Steps

1. Remove the clearly dead source files.
2. Fix the footer so `Woodshop` and `Kitchen & Grill` stop linking to unimplemented routes.
3. Audit unused assets and documentation files separately.
