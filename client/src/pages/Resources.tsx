import { FileText, Phone, ExternalLink, BookOpen, Heart, AlertCircle, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Forms, crisis support, and trusted organizations for families and school districts in Connecticut
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Resources - First because most urgent */}
      <section className="py-16 bg-red-50 border-y border-red-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              In a Crisis or Emergency
            </h2>
          </div>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            If you or your child is in immediate danger, call 911. The resources below are available
            around the clock for mental health crises and urgent support.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                988 Suicide and Crisis Lifeline
              </h3>
              <p className="text-gray-600 mb-3">
                Free, confidential support for people in distress. Available 24 hours a day, 7 days a week.
              </p>
              <p className="text-gray-900 font-semibold">
                Call or text: <a href="tel:988" className="text-red-600 hover:text-red-800">988</a>
              </p>
              <p className="text-sm text-gray-500 mt-1">Chat: 988lifeline.org</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mobile Crisis Intervention Services for Children (Connecticut)
              </h3>
              <p className="text-gray-600 mb-3">
                In-person crisis response for children and adolescents anywhere in Connecticut.
              </p>
              <p className="text-gray-900 font-semibold">
                Call or text: <a href="tel:211" className="text-red-600 hover:text-red-800">211</a>, then press 1
              </p>
              <p className="text-sm text-gray-500 mt-1">empsct.org</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Connecticut DCF Careline
              </h3>
              <p className="text-gray-600 mb-3">
                Connecticut Department of Children and Families hotline for child welfare concerns.
              </p>
              <p className="text-gray-900 font-semibold">
                <a href="tel:18008422288" className="text-red-600 hover:text-red-800">1-800-842-2288</a>
              </p>
              <p className="text-sm text-gray-500 mt-1">Available 24 hours a day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forms and Downloads */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Forms and Downloads
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Documents you may need before, during, or after an evaluation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-start space-x-4">
                <FileText className="w-10 h-10 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    School-to-Parent Recording Authorization
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A fillable form that school districts can provide to parents to authorize the
                    recording of school-based meetings or sessions.
                  </p>
                  <Link
                    href="/recording-consent"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Form
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-start space-x-4">
                <FileText className="w-10 h-10 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    School District Portal Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Step-by-step instructions for school districts on how to use the secure
                    document exchange portal, including frequently asked questions.
                  </p>
                  <Link
                    href="/portal-guide"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Portal Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connecticut Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Connecticut Mental Health and Special Education Resources
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Local organizations that provide support, advocacy, and information for families and
            educators in Connecticut.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Heart className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">NAMI Connecticut</h3>
              </div>
              <p className="text-gray-600 mb-3">
                The state chapter of the National Alliance on Mental Illness. Offers support groups,
                education programs, and advocacy for families affected by mental illness.
              </p>
              <a
                href="https://namict.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                namict.org
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Heart className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Connecticut Parent Advocacy Center (CPAC)
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                A nonprofit that helps Connecticut families navigate the special education process,
                including IEPs, Section 504 plans, and dispute resolution.
              </p>
              <a
                href="https://cpacinc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                cpacinc.org
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Phone className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">211 Connecticut</h3>
              </div>
              <p className="text-gray-600 mb-3">
                A free, confidential information and referral service connecting Connecticut residents
                to community services, including behavioral health, housing, and basic needs.
              </p>
              <p className="text-gray-900">
                Dial <a href="tel:211" className="text-blue-600 hover:text-blue-800 font-medium">211</a> or visit{" "}
                <a
                  href="https://211ct.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  211ct.org
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Connecticut State Department of Education — Special Education
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                Official state guidance on special education law, procedural safeguards, and
                resources for parents and educators.
              </p>
              <a
                href="https://portal.ct.gov/sde/special-education/bureau-of-special-education"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                portal.ct.gov
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* National Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            National Mental Health Resources
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Trusted national organizations offering education, research, and support.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <Globe className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">NAMI (National)</h3>
              <p className="text-gray-600 text-sm mb-3">
                The largest grassroots mental health organization in the United States. Offers a
                helpline, online education, and family support.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Helpline: <a href="tel:18009506264" className="text-blue-600 hover:text-blue-800">1-800-950-6264</a>
              </p>
              <a
                href="https://nami.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                nami.org
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <Globe className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SAMHSA National Helpline</h3>
              <p className="text-gray-600 text-sm mb-3">
                A free, confidential, 24/7 treatment referral service from the Substance Abuse and
                Mental Health Services Administration.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Helpline: <a href="tel:18006624357" className="text-blue-600 hover:text-blue-800">1-800-662-4357</a>
              </p>
              <a
                href="https://samhsa.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                samhsa.gov
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <Globe className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Child Mind Institute</h3>
              <p className="text-gray-600 text-sm mb-3">
                Independent nonprofit dedicated to children's mental health, with parent guides,
                symptom checkers, and clinician-reviewed articles.
              </p>
              <a
                href="https://childmind.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                childmind.org
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <Globe className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                American Academy of Child and Adolescent Psychiatry
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional organization with parent-facing "Facts for Families" guides covering a
                wide range of childhood mental health topics.
              </p>
              <a
                href="https://aacap.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                aacap.org
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <Globe className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                National Alliance for Eating Disorders
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Operates a clinician-staffed helpline and treatment finder for individuals and
                families affected by eating disorders.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Helpline: <a href="tel:18666621235" className="text-blue-600 hover:text-blue-800">1-866-662-1235</a>
              </p>
              <a
                href="https://allianceforeatingdisorders.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                allianceforeatingdisorders.com
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <Globe className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CHADD</h3>
              <p className="text-gray-600 text-sm mb-3">
                Children and Adults with Attention-Deficit/Hyperactivity Disorder. Education,
                advocacy, and support for individuals and families affected by ADHD.
              </p>
              <a
                href="https://chadd.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                chadd.org
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links to Other Pages on Site */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More on This Site
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/process" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation Process</h3>
              <p className="text-gray-600 text-sm">
                A step-by-step explanation of what to expect during an independent psychiatric evaluation.
              </p>
            </Link>

            <Link href="/parents" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Parents and Families</h3>
              <p className="text-gray-600 text-sm">
                Information for families considering an evaluation for their child.
              </p>
            </Link>

            <Link href="/school-districts" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For School Districts</h3>
              <p className="text-gray-600 text-sm">
                Information for special education directors and IEP teams.
              </p>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-4">
              Have a question that isn't answered here?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Dr. Kale
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center">
            The external organizations listed above are provided for informational purposes only.
            Dr. Kale does not control and is not responsible for the content of third-party websites.
            The information on this page is not a substitute for individualized medical or
            psychiatric advice. If you are concerned about your child's mental health, please
            contact a licensed clinician.
          </p>
        </div>
      </section>
    </div>
  );
}
