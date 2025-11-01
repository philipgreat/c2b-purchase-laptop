import React, { useState } from "react";
import {
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  StepIconProps,
  StepConnector,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InventoryIcon from "@mui/icons-material/Inventory";
import GestureIcon from "@mui/icons-material/Gesture";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PrintIcon from "@mui/icons-material/Print";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Step1ScanAdvisor from "@/components/Step1ScanAdvisor";
import Step2ScanLicense from "@/components/Step2ScanLicense";
import Step3ProductInfo from "@/components/Step3ProductInfo";
import Step4Signature from "@/components/Step4Signature";
import Step5Review from "@/components/Step5Review";
import Step6PrintCheck from "@/components/Step6PrintCheck";
import Step7Done from "@/components/Step7Done";

// ----------------------
// Step Definitions
// ----------------------
const steps = [
  { label: "Advisor Verification", icon: <QrCode2Icon /> },
  { label: "Scan ID", icon: <CreditCardIcon /> },
  { label: "Product Info", icon: <InventoryIcon /> },
  { label: "Customer Signature", icon: <GestureIcon /> },
  { label: "Prepare Check", icon: <FactCheckIcon /> },
  { label: "Print Check", icon: <PrintIcon /> },
  { label: "Complete", icon: <CheckCircleIcon /> },
];

// ----------------------
// Custom Connector (line in the middle of icons)
// ----------------------
const CenteredConnector = styled(StepConnector)(({ theme }) => ({
  [`&.MuiStepConnector-alternativeLabel`]: {
    top: 30, // 60px icon height / 2 → middle
    left: "calc(-50% + 40px)",
    right: "calc(50% + 40px)",
  },
  [`& .MuiStepConnector-line`]: {
    borderColor: "#d3d3d3",
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

// ----------------------
// Custom Large Step Icons
// ----------------------
const LargeStepIcon = styled("div")<{ active?: boolean; completed?: boolean }>(
  ({ theme, active, completed }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: completed
      ? theme.palette.success.light
      : active
      ? theme.palette.primary.main
      : "#e0e0e0",
    color: completed || active ? "#fff" : "#757575",
    fontSize: "2rem",
    transition: "all 0.3s ease",
  })
);

const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed, icon } = props;
  const index = Number(icon) - 1;
  const IconComponent = steps[index]?.icon || <CheckCircleIcon />;
  return (
    <LargeStepIcon active={active} completed={completed}>
      {React.cloneElement(IconComponent, { fontSize: "large" })}
    </LargeStepIcon>
  );
};

// ----------------------
// Main Component
// ----------------------
const PurchaseFlow: React.FC = ({setPage}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<any>({});

  const handleNext = (data?: any) => {
    if (data) setFormData((prev: any) => ({ ...prev, ...data }));
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const StepContent = () => {
    switch (activeStep) {
      case 0:
        return <Step1ScanAdvisor setPage={setPage} onNext={(advisor) => handleNext({ advisor })} />;
      case 1:
        return <Step2ScanLicense onNext={(customer) => handleNext({ customer })} />;
      case 2:
        return <Step3ProductInfo onNext={(product) => handleNext({ product })} />;
      case 3:
        return <Step4Signature onNext={(signature) => handleNext({ signature })} />;
      case 4:
        return <Step5Review data={formData} onNext={() => handleNext()} />;
      case 5:
        return <Step6PrintCheck onNext={() => handleNext()} />;
      case 6:
        return <Step7Done />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        overflowY: "auto",
        p: 4,
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: 1200,
          p: 4,
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<CenteredConnector />} // ✅ line now in the middle
          sx={{
            mb: 5,
            "& .MuiStepLabel-label": {
              fontSize: "1rem",
              fontWeight: 600,
              mt: 1,
            },
          }}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={CustomStepIcon}>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ minHeight: 500, paddingTop: 5 }}>
          <StepContent />
        </Box>

        {activeStep < steps.length - 1 && (
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default PurchaseFlow;
