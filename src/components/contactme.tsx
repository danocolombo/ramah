import React, { ChangeEvent, useMemo, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import emailIcon from "../assets/email.svg";
import paperAirplane from "../assets/send.svg";

const INQUIRY_TYPES = [
  "General Inquiry",
  "Software Development",
  "AWS / Cloud",
  "Project Collaboration",
  "Recovery Inquiry",
  "Suggestion/Feedback",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  email: string;
  phone: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: "",
};

export default function Contact() {
  const theme = useTheme();
  // Matches the same breakpoint used by HeaderMenu for consistent mobile behavior
  const isMobile = useMediaQuery("(max-width:850px)");

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({ email: "", phone: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const contactEmail =
    (import.meta.env.VITE_CONTACT_EMAIL as string) || "danocolombo@gmail.com";

  const isValid = useMemo(
    () =>
      form.name.trim().length > 0 &&
      form.email.trim().length > 0 &&
      form.message.trim().length > 0 &&
      errors.email.length === 0 &&
      errors.phone.length === 0,
    [form, errors]
  );

  const handleTextChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));

    if (id === "email") {
      const valid =
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
      setErrors((prev) => ({
        ...prev,
        email: valid || value.length === 0 ? "" : "Invalid email address",
      }));
    } else if (id === "phone") {
      if (value.length === 0) {
        setErrors((prev) => ({ ...prev, phone: "" }));
      } else {
        const valid =
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
        setErrors((prev) => ({
          ...prev,
          phone: valid ? "" : "Invalid phone number",
        }));
      }
    }
  };

  const handleInquiryChange = (e: SelectChangeEvent) => {
    setForm((prev) => ({ ...prev, inquiryType: e.target.value }));
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      `DColombo.com — ${form.inquiryType || "General Inquiry"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Inquiry type: ${form.inquiryType || "General Inquiry"}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setForm(initialForm);
    setSnackbar({
      open: true,
      message:
        "Your mail app should open — send the message from there to complete.",
    });
  };

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        px: isMobile ? 2 : 5,
        pb: 8,
        pt: 1,
      }}
    >
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          Main
        </Link>
        <Typography color="text.primary">Contact Me</Typography>
      </Breadcrumbs>

      {/* Page heading — h2 variant picks up Raleway 700, arcBlue color from theme */}
      <Typography variant="h2" sx={{ mb: 0.5 }}>
        Contact Me
      </Typography>
      {/* body1 variant picks up arcGrey color + Roboto 300 from theme */}
      <Typography variant="body1" sx={{ mb: 4 }}>
        Have a project in mind or just want to connect? I'd love to hear from
        you.
      </Typography>

      <Grid
        container
        spacing={isMobile ? 3 : 6}
        direction={isMobile ? "column" : "row"}
        alignItems="flex-start"
      >
        {/* ── Left panel: info + direct email link ── */}
        <Grid item xs={12} sx={{ width: isMobile ? "100%" : 320, flexShrink: 0 }}>
          {/* h4 variant: Raleway 700, fortsonBlue, 1.75rem */}
          <Typography variant="h4" gutterBottom>
            Get in touch
          </Typography>
          {/* body1: arcGrey, Roboto 300, 1.25rem */}
          <Typography variant="body1" sx={{ mb: 3 }}>
            Whether you have a software challenge, an AWS project, a recovery
            resource question, or just want to connect — reach out anytime.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Clickable direct email address */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <img
              src={emailIcon}
              alt="email"
              style={{ width: 22, height: 22, flexShrink: 0 }}
            />
            <Link
              href={`mailto:${contactEmail}`}
              underline="hover"
              sx={{
                color: theme.palette.common.blue,
                fontFamily: theme.typography.tab.fontFamily, // Raleway
                fontSize: theme.typography.body1.fontSize,   // 1.25rem
                fontWeight: theme.typography.tab.fontWeight, // 700
                wordBreak: "break-all",
              }}
            >
              {contactEmail}
            </Link>
          </Box>

          {/* caption variant: arcGrey, Roboto 300, 1rem */}
          <Typography variant="caption" sx={{ fontStyle: "italic", display: "block" }}>
            Prefer to write your own email? Click the address above to open
            your mail client directly.
          </Typography>
        </Grid>

        {/* ── Right panel: contact form ── */}
        <Grid item xs={12} sx={{ flex: 1, width: "100%" }}>
          <Card
            variant="outlined"
            sx={{
              borderRadius: 3,
              borderColor: theme.palette.divider,
            }}
          >
            <CardContent sx={{ p: isMobile ? 2 : 4 }}>
              <Grid container spacing={2.5}>
                {/* Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full Name *"
                    id="name"
                    fullWidth
                    value={form.name}
                    onChange={handleTextChange}
                    autoComplete="name"
                  />
                </Grid>

                {/* Spacer — keeps Email aligned with Name on wide screens */}
                <Grid item xs={0} sm={6} sx={{ display: { xs: "none", sm: "block" } }} />

                {/* Inquiry type — full width so it's never squeezed, with a visible placeholder */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    {/* InputLabel color (arcBlue) + fontSize (1rem) come from theme MuiInputLabel override */}
                    <InputLabel id="inquiry-label" shrink>
                      What can I help you with?
                    </InputLabel>
                    <Select
                      labelId="inquiry-label"
                      value={form.inquiryType}
                      label="What can I help you with?"
                      onChange={handleInquiryChange}
                      displayEmpty
                      notched
                      renderValue={(selected) =>
                        selected ? (
                          String(selected)
                        ) : (
                          <Typography
                            component="span"
                            sx={{ color: theme.palette.common.grey, fontStyle: "italic" }}
                          >
                            Select the topic that best fits your inquiry…
                          </Typography>
                        )
                      }
                    >
                      {INQUIRY_TYPES.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Email */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email Address *"
                    id="email"
                    fullWidth
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleTextChange}
                    error={errors.email.length > 0}
                    helperText={errors.email}
                  />
                </Grid>

                {/* Phone (optional) */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone (optional)"
                    id="phone"
                    fullWidth
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleTextChange}
                    error={errors.phone.length > 0}
                    helperText={errors.phone || "e.g. 555-867-5309"}
                  />
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                  <TextField
                    label="Message *"
                    id="message"
                    fullWidth
                    multiline
                    rows={isMobile ? 5 : 7}
                    value={form.message}
                    onChange={handleTextChange}
                    placeholder="Tell me about your project or question…"
                  />
                </Grid>

                {/* Submit — color="primary" pulls palette.primary.main (#0000FF) + contrastText from theme */}
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-end",
                    mt: 0.5,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!isValid}
                    onClick={handleSubmit}
                    endIcon={
                      <img
                        src={paperAirplane}
                        alt=""
                        style={{ height: 18, marginLeft: 4 }}
                      />
                    }
                    sx={{
                      ...theme.typography.tab, // Raleway 700, textTransform none
                      borderRadius: 50,
                      fontSize: "1rem",
                      height: 48,
                      px: 4,
                      "&:hover": {
                        backgroundColor: theme.palette.secondary.main,
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* severity="success" + variant="filled" renders MUI's default success green */}
      <Snackbar
        open={snackbar.open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        autoHideDuration={6000}
      >
        <Alert
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
