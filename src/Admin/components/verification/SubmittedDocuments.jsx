// src/Admin/components/verification/SubmittedDocuments.jsx
import React from "react";
import CardContainer from "../../../common/layout/CardContainer";

const documents = [
  {
    title: "Medical_License_2023.pdf",
    meta: "Board Certified • 2.4 MB",
    icon: "verified_user",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhXT2ZjY-48gHJucj6BNdKUkfAvt3A7TnB7XGm4uPy_R13JuWgHsrEW8ieBWBQJlGeGoPee88CVBsBCajPdl9S3ghn1-t2knCGXMrg4JgJcwa0PybqIDgMkgQA6y22Akq9gZv5lNYKsf1DKunVWl6ikj7eC8KDg1opMEia6wLAE9TNhG5miEeyg3GuiaFKRcJd7deqUpFIwUlQILVphgohGa7hh2EyDkc3hYR-me76U94IfUw_GtpmacA9MHfmDOMMli_8wBCPNxYt",
  },
  {
    title: "Passport_Verification.jpg",
    meta: "Identity Proof • 1.1 MB",
    icon: "check_circle",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvSb5WOzSEtvxZ9W-OyD_WrNaWHXjn1GvZ1gihuqgCa9xTdmnf27T8mO_RZT6c-ArbRFloRyhz_QeHnajwNDrf7YVpN0d4xBPZed2XFHBAW_TatxH05Qdcoa1YygOxLNRbubmFHyl4U5JKnpuFnKuUJkFDZpHHbY67cF-tKERSHd6_b3wjBLtOjopERPHdAEdjKhg-ASK-ITqUdEXenM4PBIKNsvjzLz5fNv_GT7Kb-JhBMUbzY6XwxREFRp73Mo-gJuhfaXTno8wo",
  },
  {
    title: "Curriculum_Vitae.pdf",
    meta: "Experience History • 850 KB",
    icon: "description",
    placeholder: "Resume_CV.pdf",
  },
  {
    title: "Fellowship_Cert.pdf",
    meta: "Specialty Certificate • 3.2 MB",
    icon: "verified",
    placeholder: "Board_Certificate.pdf",
  },
];

const SubmittedDocuments = () => {
  return (
    <CardContainer variant="admin" className="p-5 sm:p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-h3 text-h3 text-on-surface">
          Submitted Documents
        </h4>

        <span className="font-label-sm text-outline">
          {documents.length} Files Attached
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <div
            key={doc.title}
            className="group relative overflow-hidden rounded-lg border border-outline-variant hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest"
          >
            {/* Preview Area */}
            <div className="aspect-[4/3] bg-surface-container-high flex items-center justify-center">
              
              {doc.image ? (
                <>
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-primary px-4 py-2 rounded-full font-label-md shadow-lg">
                      Preview
                    </span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-outline text-4xl">
                    {doc.icon}
                  </span>

                  <span className="font-label-sm text-outline mt-2">
                    {doc.placeholder}
                  </span>
                </div>
              )}

            </div>

            {/* Bottom Info */}
            <div className="p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-label-md text-on-surface truncate">
                  {doc.title}
                </p>

                <p className="font-label-sm text-outline">
                  {doc.meta}
                </p>
              </div>

              {doc.image && (
                <span className="material-symbols-outlined text-outline shrink-0">
                  {doc.icon}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

    </CardContainer>
  );
};

export default SubmittedDocuments;