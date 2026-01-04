import { Shield, Upload, Download, Lock, FileText, HelpCircle } from "lucide-react";

export default function PortalGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              School District Portal Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know about using the secure document exchange portal
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Start Guide
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Go to the Portal
                </h3>
                <p className="text-gray-600 mb-2">
                  Open your web browser and navigate to:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <a 
                    href="/school-portal" 
                    className="text-blue-600 hover:text-blue-800 font-mono text-lg"
                  >
                    www.drkale.net/school-portal
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enter Your Access Code
                </h3>
                <p className="text-gray-600 mb-2">
                  Enter the unique access code provided to you by Dr. Kale. It will look something like:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <code className="text-gray-800 font-mono">DISTRICT-2026-001</code>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Access codes are case-insensitive and unique to your district.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Upload Documents
                </h3>
                <p className="text-gray-600 mb-4">
                  Once redirected to your secure folder, you can upload documents in two ways:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Drag and Drop:</strong> Simply drag files from your computer into the folder window</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Upload Button:</strong> Click the "Upload" button and select files from your computer</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Download Completed Evaluations
                </h3>
                <p className="text-gray-600">
                  When Dr. Kale completes your evaluation, the report will be uploaded to your secure folder. You can download it at any time by returning to the portal with your access code.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/school-portal"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Access Portal Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Portal Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                HIPAA Compliant
              </h3>
              <p className="text-gray-600">
                All documents are protected with enterprise-grade encryption and HIPAA-compliant security measures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Lock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Private & Isolated
              </h3>
              <p className="text-gray-600">
                Your district's folder is completely isolated. No other districts can access or even see your documents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Upload className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Upload
              </h3>
              <p className="text-gray-600">
                Drag and drop files or use the upload button. Supports PDF, Word, images, and other common formats.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Download className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Access
              </h3>
              <p className="text-gray-600">
                Access your documents anytime, anywhere. Download completed evaluations at your convenience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <FileText className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Two-Way Exchange
              </h3>
              <p className="text-gray-600">
                Upload documents to Dr. Kale and receive completed evaluation reports in the same secure location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <HelpCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Support Available
              </h3>
              <p className="text-gray-600">
                Having trouble? Contact Dr. Kale for assistance with accessing or using your portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What if I lose my access code?
              </h3>
              <p className="text-gray-600">
                Contact Dr. Kale directly and he will provide you with your access code again. For security reasons, access codes are not displayed on the website.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What file types can I upload?
              </h3>
              <p className="text-gray-600">
                You can upload PDF files, Word documents (.doc, .docx), images (.jpg, .png), and most other common file formats. If you have a specific file type question, please contact Dr. Kale.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Is there a file size limit?
              </h3>
              <p className="text-gray-600">
                Individual files should be under 250 MB. If you need to upload larger files, please contact Dr. Kale for alternative arrangements.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can other school districts see our documents?
              </h3>
              <p className="text-gray-600">
                Absolutely not. Each district has a completely isolated folder. Other districts cannot see your folder, your documents, or even know that you're using this service. Complete privacy is guaranteed.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How will I know when my evaluation is ready?
              </h3>
              <p className="text-gray-600">
                Dr. Kale will notify you via email when your evaluation report has been uploaded to your portal. You can then log in with your access code to download it.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Is this portal HIPAA compliant?
              </h3>
              <p className="text-gray-600">
                Yes. The portal uses Microsoft SharePoint with enterprise-grade encryption and security. All data is protected according to HIPAA requirements, and Dr. Kale has a Business Associate Agreement (BAA) with Microsoft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If you have questions about accessing your portal or need technical assistance, please don't hesitate to contact Dr. Kale.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Dr. Kale
          </a>
        </div>
      </section>
    </div>
  );
}
