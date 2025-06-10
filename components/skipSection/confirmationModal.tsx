//Todo: Add confirmation modal, Add Framer-mootion animation

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  XCircleIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { calculateTotalPrice } from "~/lib/utils";

// Animation variants for the backdrop
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Animation variants for the modal panel
const modalVariants = {
  hidden: { y: "-20px", opacity: 0, scale: 0.98 },

  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    y: "20px",
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  skip,
  onClose,
  onContinue,
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    // Backdrop
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 transition-opacity"
      aria-modal="true"
      role="dialog"
      onClick={onClose} // Close on backdrop click
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3 }}
    >
      {/* Modal Panel */}
      <motion.div
        className="bg-[#303030] light:bg-white/90 rounded-xl shadow-2xl w-full max-w-md transform transition-all"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b border-gray-200/20">
          <div>
            <h2
              className="text-2xl font-bold mb-2 text-gray-200 light:text-gray-900"
              id="modal-title"
            >
              Confirm Your Selection
            </h2>
            <p className="text-gray-400">
              Please review the details for your chosen skip.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-8 w-8 text-white font-extrabold rounded-lg  bg-blue-500" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Summary Details */}
          <div className="grid grid-cols-3 text-center divide-x divide-gray-200/10 bg-gray-200/20 p-4 rounded-lg">
            <div>
              <p className="text-xs text-gray-300">Size</p>
              <p className="font-bold text-lg text-gray-200">
                {skip.size} Yard
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-300">Hire Period</p>
              <p className="font-bold text-lg text-gray-200">
                {skip.hire_period_days} Days
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-300">Price (Inc. VAT)</p>
              <p className="font-bold text-lg text-green-600">
                £{calculateTotalPrice(skip.price_before_vat, skip.vat)}
              </p>
            </div>
          </div>

          {/* Important Restrictions */}
          <div>
            <h3 className="font-semibold text-md text-gray-300 mb-2">
              Important Restrictions
            </h3>
            <ul className="space-y-2 text-sm text-white/80 border border-gray-200 p-3 rounded-md">
              <li className="flex items-center gap-2">
                {skip.allowed_on_road ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircleIcon className="h-5 w-5 text-red-500" />
                )}
                <span>Placeable on public roads</span>
              </li>
              <li className="flex items-center gap-2">
                {skip.allows_heavy_waste ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircleIcon className="h-5 w-5 text-red-500" />
                )}
                <span>Allows heavy waste (soil/rubble)</span>
              </li>
            </ul>
          </div>

          {/* Collapsible Info */}
          <div>
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="w-full flex justify-between items-center text-left text-md font-medium text-gray-300 hover:text-gray-900"
            >
              <span>Important Information</span>
              <ChevronDownIcon
                className={`h-5 w-5 transform transition-transform ${
                  isDetailsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`mt-2 text-xs text-gray-500 overflow-hidden transition-all duration-300 ${
                isDetailsOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="p-3 bg-gray-300/10 text-white/90 rounded-md">
                Images are for illustration purposes only. Exact specifications
                and included accessories may vary. All pricing and restrictions
                are subject to our terms and conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Footer with Actions */}
        <div className="p-4  border-t border-gray-200/10 flex justify-end gap-3 rounded-b-xl">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            Go Back
          </button>
          <button
            onClick={onContinue}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmationModal;
