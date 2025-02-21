// src/data/servicesData.js

import {
  faGlobe,
  faEye,
  faLock,
  faUserShield,
  faShieldAlt,
  faLaptopCode,
  faChartLine,
  faFileCode,
  faUserFriends,
  faBrain,
  faHandshake,
  faHammer,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';

const servicesData = [
  {
    id: 1,
    title: 'OSINT',
    description: 'Open Source Intelligence gathers information from publicly available sources.',
    detailDescription: 'Our OSINT (Open Source Intelligence) service involves the systematic collection and analysis of information from publicly available sources such as social media platforms, news outlets, forums, and government databases. We leverage advanced tools and techniques to gather actionable intelligence that helps organizations understand their online footprint, identify potential threats, and enhance their overall security posture. By monitoring and analyzing open-source data, we provide valuable insights for threat assessments, competitive intelligence, and proactive security measures.',
    icon: faGlobe,
    link: '/services/osint', // Replace with your service link
  },
  {
    id: 2,
    title: 'Sentimental Analysis',
    description: 'A sentiment analysis is an AI/ML based technique that automatically analyzes text data to help quickly understand how customers feel about a brand, product, person, politician or any service.',
    detailDescription: 'Sentiment analysis tools quantifies all unstructured data and use data visualization techniques/tools to transform text data into valuable customer insights, reveal trends and patterns over time, easily spot customer/public pain points, and make data-based decisions that will improve brand reputation and drive a business forward by automatically detecting the emotion in online conversations or posts and assigning them a positive, negative, or neutral tag.',
    icon: faGlobe,
    link: '/services/osint', // Replace with your service link
  },
  {
    id: 3,
    title: 'Cyber Threat Intelligence',
    description: 'Identifies and mitigates threats from the digital world to your organization.',
    detailDescription: 'Our Cyber Threat Intelligence (CTI) service is designed to proactively identify, analyze, and mitigate cyber threats targeting your organization. We employ sophisticated threat detection techniques and leverage threat intelligence feeds to monitor and assess potential risks in real-time. By correlating internal data with external threat intelligence sources, we provide actionable insights into emerging threats, their sources, and recommended defensive strategies. Our CTI service empowers organizations to stay ahead of cyber adversaries and protect their critical assets and data.',
    icon: faEye,
    link: '/services/cyber-threat-intelligence', // Replace with your service link
  },
  {
    id: 4,
    title: 'Dark Web Monitoring',
    description: 'Monitors and alerts about potential security threats originating from the dark web.',
    detailDescription: 'Our Dark Web Monitoring service offers continuous surveillance and proactive detection of security threats originating from the dark web. We monitor illicit marketplaces, forums, and underground networks to identify stolen credentials, sensitive data leaks, and other malicious activities that may pose risks to your organization. Through advanced monitoring tools and threat intelligence capabilities, we provide timely alerts and actionable insights to mitigate risks, protect sensitive information, and safeguard your reputation.',
    icon: faLock,
    link: '/services/dark-web-monitoring', // Replace with your service link
  },
  {
    id: 5,
    title: 'VAPT',
    description: 'Vulnerability Assessment and Penetration Testing for your digital assets.',
    detailDescription: 'Our Vulnerability Assessment and Penetration Testing (VAPT) service is a comprehensive approach to identifying and mitigating security vulnerabilities in your digital assets. We conduct thorough assessments using automated scanning tools and manual testing techniques to uncover potential weaknesses in networks, applications, and infrastructure. By simulating real-world attacks through ethical hacking, we provide detailed reports and remediation recommendations to strengthen your defenses against cyber threats and ensure compliance with industry standards.',
    icon: faUserShield,
    link: '/services/vapt', // Replace with your service link
  },
  {
    id: 6,
    title: 'Risk Monitoring',
    description: 'Continuous monitoring and assessment of security risks and vulnerabilities.',
    detailDescription: 'Our Risk Monitoring service delivers continuous monitoring and proactive assessment of security risks and vulnerabilities that could impact your organization. We utilize advanced threat detection technologies and analytics to identify emerging threats, prioritize risks based on severity, and recommend mitigation strategies. By providing real-time insights and threat intelligence, we empower organizations to anticipate threats, minimize potential impacts, and maintain robust cybersecurity defenses.',
    icon: faShieldAlt,
    link: '/services/risk-monitoring', // Replace with your service link
  },
  {
    id: 7,
    title: 'Credential Leakage Monitoring',
    description: 'Monitors and alerts about leaks of your credentials and sensitive information.',
    detailDescription: 'Our Credential Leakage Monitoring service monitors and detects leaks of credentials, sensitive information, and proprietary data across various online channels and platforms. We employ advanced monitoring tools and threat intelligence capabilities to identify potential exposures and unauthorized disclosures of sensitive data. By providing timely alerts and proactive mitigation measures, we help organizations protect their digital assets, maintain compliance with data protection regulations, and preserve customer trust.',
    icon: faLaptopCode,
    link: '/services/credential-leakage-monitoring', // Replace with your service link
  },
  {
    id: 8,
    title: 'Fake App Analysis',
    description: 'Analysis and detection of fraudulent applications posing as legitimate ones.',
    detailDescription: 'Our Fake App Analysis service involves comprehensive analysis and detection of fraudulent applications that impersonate legitimate brands or services. We utilize advanced behavioral analysis, machine learning, and threat intelligence techniques to identify malicious apps, protect your brand reputation, and safeguard users from potential risks. By monitoring app stores and digital platforms, we help organizations mitigate the impact of counterfeit apps and ensure a secure digital experience for their customers.',
    icon: faChartLine,
    link: '/services/fake-app-analysis', // Replace with your service link
  },
  {
    id: 9,
    title: 'Fake Domain Monitoring',
    description: 'Monitoring and detection of fake domains impersonating your brand.',
    detailDescription: 'Our Fake Domain Monitoring service provides continuous monitoring and proactive detection of fake domains that impersonate your brand or organization. We utilize advanced domain analysis tools and threat intelligence capabilities to identify and mitigate phishing attacks, protect customer trust, and prevent potential data breaches. By monitoring domain registrations and DNS records, we help organizations maintain brand integrity and defend against online threats.',
    icon: faFileCode,
    link: '/services/fake-domain-monitoring', // Replace with your service link
  },
  {
    id: 10,
    title: 'Source Code Review',
    description: 'Thorough review and analysis of your software source code for security vulnerabilities.',
    detailDescription: 'Our Source Code Review service involves in-depth analysis and review of software source code to identify potential security vulnerabilities, coding errors, and compliance issues. We employ static and dynamic code analysis techniques, manual review processes, and industry best practices to assess the security posture of applications and software systems. By providing actionable insights and remediation recommendations, we help organizations enhance software security, reduce risks, and ensure the integrity of their codebase.',
    icon: faUserFriends,
    link: '/services/source-code-review', // Replace with your service link
  },
  {
    id: 11,
    title: 'Online Reputation Management',
    description: 'Protecting and managing your online reputation from malicious attacks.',
    detailDescription: 'Our Online Reputation Management service protects and manages your online reputation by monitoring digital channels, analyzing online sentiment, and responding to reputation threats. We utilize advanced analytics, social listening tools, and proactive mitigation strategies to mitigate negative reviews, suppress misleading information, and enhance your brand’s online presence. By safeguarding your reputation and fostering positive engagement, we help organizations maintain trust and credibility in the digital age.',
    icon: faBrain,
    link: '/services/online-reputation-management', // Replace with your service link
  },
  {
    id: 12,
    title: 'Trend Analysis',
    description: 'Our Trend Analysis Service enables you to track data over time, identify patterns, and gain valuable insights.',
    detailDescription: 'Our Trend Analysis Service helps you track data over time to detect changes and identify patterns. This service is essential for businesses and finance sectors to monitor products, sales, and other critical metrics. Additionally, it can analyze social trends and economic conditions, offering predictive insights to inform strategic decisions. By leveraging our trend analysis, you can make data-driven decisions, mitigate risks, gain a competitive edge, and optimize resources effectively.',
    icon: faHandshake,
    link: '/services/trend-analysis', // Replace with your service link
  },
  {
    id: 13,
    title: 'Human Resource Security',
    description: 'Ensuring security measures are in place for human resources within your organization.',
    detailDescription: 'Our Human Resource Security service focuses on protecting employees, contractors, and third parties from internal and external security threats. We offer comprehensive security awareness training, policy development, and incident response planning to foster a culture of security within your organization. By implementing robust security measures and promoting best practices, we help mitigate human-related risks and safeguard sensitive information against unauthorized access and breaches.',
    icon: faHammer,
    link: '/services/human-resource-security', // Replace with your service link
  },
  {
    id: 14,
    title: 'Security Consultancy',
    description: 'Consultancy services for implementing and maintaining cybersecurity measures.',
    detailDescription: 'Our Security Consultancy service provides expert guidance and strategic advice for implementing and maintaining effective cybersecurity measures tailored to your organization’s needs. We conduct comprehensive security assessments, develop customized security strategies, and offer ongoing support to address evolving threats and compliance requirements. By partnering with us, organizations can enhance their cybersecurity posture, mitigate risks, and protect critical assets and data.',
    icon: faUndo,
    link: '/services/security-consultancy', // Replace with your service link
  },
];

export default servicesData;
