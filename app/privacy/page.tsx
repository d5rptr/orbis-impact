"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-accent text-darkBlue font-sans py-8 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold text-darkBlue mb-6">Privacy Policy</h1>
        <p className="mb-4">
          This Privacy Policy discloses the privacy practices for the Orbis Operations, LLC owned and
          operated websites and other product offerings (collectively referred to as the "Services"), and to any other services that display this Privacy Policy. Your privacy is very important to us. To better protect your privacy, we provide this Privacy Policy explaining our information practices and the choices you can make about the way your information is collected and used by Orbis Operations Management Company, LLC.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">The Information We Collect</h2>
        <p className="mb-4">
          We may collect information, including any personally identifiable information that you
          provide to us in the course of using the Services. The types of information that may be
          collected through the Services include, but are not limited to: name, address, gender,
          e-mail address, telephone number or fax number.
        </p>
        <p className="mb-4">
          We may also collect certain non-personally identifiable information when you visit our
          web pages, open our emails or otherwise use the Services, including such information as
          the type of browser and operating system you are using, your IP address, your device
          identifiers, your Internet or wireless service provider, location-based information, and
          the content you have interacted with, viewed, or accessed. This data may be combined and
          linked with data from other sources.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use the Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Respond to inquiries about offerings and offer other products, programs, or services
            that may be of interest.
          </li>
          <li>
            Combine information with outside records to enhance our ability to market products or
            services.
          </li>
          <li>Communicate with you.</li>
          <li>
            Use non-personally identifiable information to improve the design and content of
            websites and customize your Internet experience.
          </li>
          <li>
            Disclose information when required by law, such as in response to a court order or a
            subpoena.
          </li>
          <li>
            Share information with agents and contractors performing services on behalf of Orbis
            Operations Management Company, LLC.
          </li>
          <li>
            Disclose information in the event of a merger, acquisition, divestiture, or other
            business transaction.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Privacy Options</h2>
        <p className="mb-4">
          If you prefer not to receive e-mail marketing from Orbis Operations, LLC, please{" "}
          <a href="#" className="text-orbitBlue hover:text-azureBlue transition">
            click here
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Your California Privacy Rights</h2>
        <p className="mb-4">
          California's "Shine the Light" law, Civil Code section 1798.83, requires certain businesses
          to respond to requests from California customers asking about the businesses' practices
          related to disclosing personal information to third parties for the third parties' direct
          marketing purposes. If you wish to opt-out, please{" "}
          <a href="#" className="text-orbitBlue hover:text-azureBlue transition">
            click here
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Collection of Information by Third Parties</h2>
        <p className="mb-4">
          We may use third parties to present or serve advertisements, including online behavioral
          advertisements, that you may see on the Services. Orbis Operations Management Company, LLC
          does not share information that identifies you. Only anonymous data is collected.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Cookies and other Tracking Technologies</h2>
        <p className="mb-4">
          We may place "cookies" on your computer or device to store your preferences. Most browsers
          automatically accept cookies, but you can adjust your browser settings to block or delete
          cookies. For more information, visit{" "}
          <a
            href="http://www.allaboutcookies.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orbitBlue hover:text-azureBlue transition"
          >
            http://www.allaboutcookies.org/
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Commitment to Security</h2>
        <p className="mb-4">
          We have implemented certain administrative, technical, and physical safeguards to help
          prevent unauthorized access. However, no system can be completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to this Privacy Policy</h2>
        <p className="mb-4">
          This Privacy Policy may be changed at any time. The revised Privacy Policy will be posted
          here.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">How to Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <address className="not-italic">
          Orbis Operations Management Company, LLC <br />
          6862 Elm St. Ste 300 <br />
          McLean, VA 22101-3886 <br />
          <a href="mailto:impact@orbisops.com" className="text-orbitBlue hover:text-azureBlue transition">
            impact@orbisops.com
          </a>
        </address>

        <p className="mt-6 text-sm text-gray-600">Last updated: March 3, 2020</p>
      </div>
    </div>
  );
}
