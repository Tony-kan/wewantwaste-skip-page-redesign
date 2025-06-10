import React from "react";
import { CheckIcon, CheckCircleIcon } from "@heroicons/react/24/solid"; // Using a smaller check for completed steps

import { processSteps } from "app/constants/index";

const Header = () => {
  const currentStepId = "select-skip";

  const currentStepIndex = processSteps.findIndex(
    (step) => step.id === currentStepId
  );

  // Helper function to determine step status
  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStepIndex) return "completed";
    if (stepIndex === currentStepIndex) return "current";
    return "future";
  };

  const currentStepData =
    currentStepIndex !== -1 ? processSteps[currentStepIndex] : null;

  return (
    <nav
      aria-label="Progress"
      className="w-full py-4 px-4 bg-[#191a1a] text-gray-300 border-b-gray-600 light:bg-gray-100 border-b light:border-gray-200"
    >
      {/* ------------------ MOBILE VIEW (Compact Stepper) ------------------ */}
      {/* This entire div is hidden on medium screens and up (md:hidden) */}
      <div className="md:hidden">
        {/* The visual stepper bar with dots and lines */}
        <div className="flex items-center" role="list">
          {processSteps.map((step, stepIdx) => {
            const status = getStepStatus(stepIdx);
            const isLastStep = stepIdx === processSteps.length - 1;
            return (
              <React.Fragment key={step.id}>
                {/* Dot / Circle */}
                <div
                  className={`flex items-center justify-center rounded-full ${
                    status === "current" ? "w-4 h-4" : "w-3 h-3" // Current step is slightly larger
                  } ${
                    status === "completed" || status === "current"
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                >
                  {status === "completed" && (
                    <CheckIcon className="h-2 w-2 text-white" />
                  )}
                </div>

                {/* Connecting Line (not shown after the last step) */}
                {!isLastStep && (
                  <div
                    className={`flex-1 h-0.5 ${
                      status === "completed" ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        {/* Label for the Current Step */}
        {currentStepData && (
          <div className="mt-3">
            <p className="text-xs text-gray-300 font-medium">
              STEP {currentStepIndex + 1} OF {processSteps.length}
            </p>
            <p className="text-base font-bold text-gray-800">
              {currentStepData.label}
            </p>
          </div>
        )}
      </div>

      {/* ------------------- DESKTOP VIEW (Full Timeline) ------------------- */}
      {/* This entire div is hidden by default and shown on medium screens and up (hidden md:flex) */}
      <div className="hidden md:flex items-center justify-center">
        {processSteps.map((step, stepIdx) => {
          const status = getStepStatus(stepIdx);
          const isLastStep = stepIdx === processSteps.length - 1;
          const IconComponent =
            status === "completed" ? CheckCircleIcon : step.iconOutline;
          const isHighlighted = status === "completed" || status === "current";

          return (
            <React.Fragment key={step.id}>
              {/* Step Content */}
              <div className="flex gap-2 items-center text-center mx-4">
                <div
                  className={`h-8 w-8 ${
                    isHighlighted ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  <IconComponent aria-hidden="true" />
                </div>
                <p className={`text-sm `}>{step.label}</p>
              </div>

              {/* Connecting Line */}
              {!isLastStep && (
                <div
                  className={`flex-auto h-0.5 ${
                    status === "completed" ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
