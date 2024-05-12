import NetworkCell from "@mui/icons-material/NetworkCell";
import { ToggleButtonConfig } from "../types/types";

// export const exploitabilityButtonConfigs: ToggleButtonConfig[] = [
//   {
//     title: "Attack Vector (AV)",
//     key: "AV",
//     description:
//       "This metric reflects the context by which vulnerability exploitation is possible. This metric value (and consequently the Base Score) will be larger the more remote (logically, and physically) an attacker can be in order to exploit the vulnerable component. The assumption is that the number of potential attackers for a vulnerability that could be exploited from across a network is larger than the number of potential attackers that could exploit a vulnerability requiring physical access to a device, and therefore warrants a greater Base Score.",
//     options: [
//       {
//         icon: NetworkCell,
//         label: "Network (N)",
//         key: "N",
//         description:
//           "The vulnerable component is bound to the network stack and the set of possible attackers extends beyond the other options listed below, up to and including the entire Internet. Such a vulnerability is often termed 'remotely exploitable' and can be thought of as an attack being exploitable at the protocol level one or more network hops away (e.g., across one or more routers). An example of a network attack is an attacker causing a denial of service (DoS) by sending a specially crafted TCP packet across a wide area network (e.g., CVE‑2004‑0230).",
//       },
//       {
//         icon: NetworkCell,
//         label: "Adjacent (A)",
//         key: "A",
//         description:
//           "The vulnerable component is bound to the network stack, but the attack is limited at the protocol level to a logically adjacent topology. This can mean an attack must be launched from the same shared physical (e.g., Bluetooth or IEEE 802.11) or logical (e.g., local IP subnet) network, or from within a secure or otherwise limited administrative domain (e.g., MPLS, secure VPN to an administrative network zone). One example of an Adjacent attack would be an ARP (IPv4) or neighbor discovery (IPv6) flood leading to a denial of service on the local LAN segment (e.g., CVE‑2013‑6014).",
//       },
//       {
//         icon: NetworkCell,
//         label: "Local (L)",
//         key: "L",
//         description:
//           "The vulnerable component is not bound to the network stack and the attacker’s path is via read/write/execute capabilities. Either the attacker exploits the vulnerability by accessing the target system locally (e.g., keyboard, console), or remotely (e.g., SSH); or the attacker relies on User Interaction by another person to perform actions required to exploit the vulnerability (e.g., using social engineering techniques to trick a legitimate user into opening a malicious document).",
//       },
//       {
//         icon: NetworkCell,
//         label: "Physical (P)",
//         key: "P",
//         description:
//           "The attack requires the attacker to physically touch or manipulate the vulnerable component. Physical interaction may be brief (e.g., evil maid attack1) or persistent. An example of such an attack is a cold boot attack in which an attacker gains access to disk encryption keys after physically accessing the target system. Other examples include peripheral attacks via FireWire/USB Direct Memory Access (DMA).",
//       },
//     ],
//   },
//   {
//     title: "Attack Complexity (AC)",
//     key: "AC",
//     description:
//       "This metric reflects the complexity of the attack required to exploit the vulnerability in a component. It determines if the condition to exploit is something an attacker can do at will, or if it requires additional effort, such as gathering more information or preparing the environment.",
//     options: [
//       {
//         icon: NetworkCell,
//         label: "Low (L)",
//         key: "L",
//         description:
//           "Specialized access conditions or extenuating circumstances do not exist. An attacker can expect repeatable success when attacking the vulnerable component.",
//       },
//       {
//         icon: NetworkCell,
//         label: "High (H)",
//         key: "H",
//         description:
//           "A successful attack depends on conditions beyond the attacker's control. That is, a successful attack cannot be accomplished at will, but requires the attacker to invest in some measurable amount of effort in preparation or execution against the vulnerable component before a successful attack can be expected. Conditions that an attacker may need to overcome include: gathering knowledge about the environment, preparing the target environment to improve exploit reliability, or injecting themselves into the logical network path between the target and the resource requested by the victim (e.g., a man in the middle attack).",
//       },
//     ],
//   },
//   {
//     title: "Privileges Required (PR)",
//     key: "PR",
//     description:
//       "This metric measures the level of privileges an attacker must possess before successfully exploiting the vulnerability in a component. The level of required privileges determines the ease of exploitation and the number of potential attackers.",
//     options: [
//       {
//         icon: NetworkCell,
//         label: "None (N)",
//         key: "N",
//         description:
//           "The attacker is unauthorized prior to attack, and therefore does not require any access to settings or files of the vulnerable system to carry out an attack.",
//       },
//       {
//         icon: NetworkCell,
//         label: "Low (L)",
//         key: "L",
//         description:
//           "The attacker requires privileges that provide basic user capabilities that could normally affect only settings and files owned by a user. Alternatively, an attacker with Low privileges has the ability to access only non-sensitive resources. The value changes to 0.68 if the Scope / Modified Scope is Changed.",
//       },
//       {
//         icon: NetworkCell,
//         label: "High (H)",
//         key: "H",
//         description:
//           "The attacker requires privileges that provide significant (e.g., administrative) control over the vulnerable component allowing access to component-wide settings and files. The value changes to 0.5 if the Scope / Modified Scope is Changed.",
//       },
//     ],
//   },
//   {
//     title: "User Interaction (UI)",
//     key: "UI",
//     description:
//       "This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. This metric determines whether the vulnerability can be exploited solely at the will of the attacker, or whether a separate user (or user-initiated process) must participate in some manner.",
//     options: [
//       {
//         icon: NetworkCell,
//         label: "None (N)",
//         key: "N",
//         description:
//           "The vulnerable system can be exploited without interaction from any user.",
//       },
//       {
//         icon: NetworkCell,
//         label: "Required (R)",
//         key: "R",
//         description:
//           "Successful exploitation of this vulnerability requires a user to take some action before the vulnerability can be exploited. For example, a successful exploit may only be possible during the installation of an application by a system administrator.",
//       },
//     ],
//   },
// ];

export const exploitabilityButtonConfigs: ToggleButtonConfig[] = [
  {
    title: "Attack Vector (AV)",
    key: "AV",
    description:
      "This metric reflects the context by which vulnerability exploitation is possible. The metric value (and consequently the Base Score) increases as the required proximity of the attacker to the vulnerable component decreases.",
    options: [
      {
        icon: NetworkCell,
        label: "Network (N)",
        key: "N",
        description:
          "The attacker can exploit the vulnerability remotely over the network. This scenario does not require the attacker to be physically near or to have access to any trusted network. Examples include vulnerabilities exploitable through the internet, such as certain server-side software vulnerabilities.",
      },
      {
        icon: NetworkCell,
        label: "Adjacent (A)",
        key: "A",
        description:
          "The attack can be launched from the same shared physical (e.g., Bluetooth, local Wi-Fi network) or logical (e.g., local IP subnet) network. This situation requires the attacker to have access to an adjacent network segment, which limits the attack’s feasibility to nearby devices or those on a connected but restricted network segment, such as a VPN.",
      },
      {
        icon: NetworkCell,
        label: "Local (L)",
        key: "L",
        description:
          "The vulnerability can only be exploited by an attacker with either physical access to the device or through a local network connection (e.g., SSH). This level often involves access through logged-in user sessions or the attacker being physically present to interact with the system.",
      },
      {
        icon: NetworkCell,
        label: "Physical (P)",
        key: "P",
        description:
          "Exploitation of this vulnerability requires the attacker to physically manipulate the vulnerable component. Examples include hardware tampering, USB-based attacks, and scenarios where the attacker needs direct physical interaction with the device.",
      },
    ],
  },
  {
    title: "Attack Complexity (AC)",
    key: "AC",
    description:
      "This metric reflects the complexity of the attack required to exploit the vulnerability in a component. It determines whether the exploit conditions are something an attacker can execute at will or if they need to meet additional requirements.",
    options: [
      {
        icon: NetworkCell,
        label: "Low (L)",
        key: "L",
        description:
          "The conditions to exploit the vulnerability are minimal or non-existent, allowing an attacker to exploit it repeatedly and at will. There are no special access rights required, nor does the attacker need to prepare the environment significantly to execute the attack.",
      },
      {
        icon: NetworkCell,
        label: "High (H)",
        key: "H",
        description:
          "Exploiting the vulnerability is challenging and depends on a specific set of conditions that are not always present. This might involve sophisticated setup, including manipulating the victim into performing certain actions, or the presence of specific configurations that are less common and harder to encounter.",
      },
    ],
  },
  {
    title: "Privileges Required (PR)",
    key: "PR",
    description:
      "This metric measures the level of privileges an attacker must possess before successfully exploiting the vulnerability in a component.",
    options: [
      {
        icon: NetworkCell,
        label: "None (N)",
        key: "N",
        description:
          "The attacker requires no user privileges whatsoever to exploit this vulnerability, making it possible for an outsider without any credentials to exploit it.",
      },
      {
        icon: NetworkCell,
        label: "Low (L)",
        key: "L",
        description:
          "The attacker needs to have basic user-level privileges with restricted access to system settings and data. This generally includes scenarios where the attacker has access to non-sensitive resources and can exploit the vulnerability under these limited conditions.",
      },
      {
        icon: NetworkCell,
        label: "High (H)",
        key: "H",
        description:
          "Exploiting the vulnerability requires advanced privileges, typically administrative or system-level, where the attacker has extensive control over system components or sensitive data.",
      },
    ],
  },
  {
    title: "User Interaction (UI)",
    key: "UI",
    description:
      "This metric captures the requirement for human interaction from someone other than the attacker for an exploit to succeed.",
    options: [
      {
        icon: NetworkCell,
        label: "None (N)",
        key: "N",
        description:
          "The vulnerability can be exploited without any additional user interaction which means the attacker can exploit the vulnerability independently without any assistance from users.",
      },
      {
        icon: NetworkCell,
        label: "Required (R)",
        key: "R",
        description:
          "Exploitation of the vulnerability requires some type of user interaction, such as a user running an executable file or visiting a malicious web page, which is necessary for the successful exploitation of the vulnerability.",
      },
    ],
  },
];

// export const scopeButtonConfigs: ToggleButtonConfig = {
//   title: "Scope (S)",
//   key: "S",
//   description:
//     "The security scope of a component encompasses other components that provide functionality solely to that component, even if these other components have their own security authority. For example, a database used solely by one application is considered part of that application’s security scope even if the database has its own security authority, e.g., a mechanism controlling access to database records based on database users and associated database privileges.",
//   options: [
//     {
//       icon: NetworkCell,
//       label: "Unchanged (U)",
//       key: "U",
//       description:
//         "An exploited vulnerability can only affect resources managed by the same security authority. In this case, the vulnerable component and the impacted component are either the same, or both are managed by the same security authority.",
//     },
//     {
//       icon: NetworkCell,
//       label: "Changed (C)",
//       key: "C",
//       description:
//         "	An exploited vulnerability can affect resources beyond the security scope managed by the security authority of the vulnerable component. In this case, the vulnerable component and the impacted component are different and managed by different security authorities.",
//     },
//   ],
// };

export const scopeButtonConfigs: ToggleButtonConfig = {
  title: "Scope (S)",
  key: "S",
  description:
    "The security scope of a component includes other components that exclusively support its functionality, even if these supporting components have their own security mechanisms. For instance, a database exclusively used by one application is considered within that application’s security scope, even though the database might have its own security measures, like access controls based on user roles.",
  options: [
    {
      icon: NetworkCell,
      label: "Unchanged (U)",
      key: "U",
      description:
        "When the scope is unchanged, the exploitation of the vulnerability affects only those resources that are under the same security authority as the vulnerable component. This means that both the vulnerable component and the impacted resources are governed by the same security protocols and measures, without extending the impact to other systems or components managed by different security authorities.",
    },
    {
      icon: NetworkCell,
      label: "Changed (C)",
      key: "C",
      description:
        "If the scope is changed, the exploitation of the vulnerability impacts additional resources that lie outside the immediate security authority of the vulnerable component. This scenario involves different components, potentially managed by different security protocols, indicating that the attack extends its effects beyond the originally compromised system to other systems or areas not directly associated with the initial security controls.",
    },
  ],
};


// export const impactButtonConfigs: ToggleButtonConfig[] = [
//   {
//     title: "Confidentiality (C)",
//     key: "C",
//     description:
//       "This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. Confidentiality refers to limiting information access and disclosure to only authorized users, as well as preventing access by, or disclosure to, unauthorized ones.",
//     options: [
//       {
//         label: "None (N)",
//         icon: NetworkCell,
//         key: "N",
//         description:
//           "There is no loss of confidentiality within the impacted component.",
//       },
//       {
//         label: "Low (L)",
//         icon: NetworkCell,
//         key: "L",
//         description:
//           "There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the impacted component.",
//       },
//       {
//         label: "High (H)",
//         icon: NetworkCell,
//         key: "H",
//         description:
//           "There is a total loss of confidentiality, resulting in all resources within the impacted component being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact.",
//       },
//     ],
//   },
//   {
//     title: "Integrity (I)",
//     key: "I",
//     description:
//       "This metric measures the impact to integrity of a successfully exploited vulnerability. Integrity refers to the trustworthiness and veracity of information.",
//     options: [
//       {
//         label: "None (N)",
//         icon: NetworkCell,
//         key: "N",
//         description:
//           "There is no loss of integrity within the impacted component.",
//       },
//       {
//         label: "Low (L)",
//         icon: NetworkCell,
//         key: "L",
//         description:
//           "Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact on the impacted component.",
//       },
//       {
//         label: "High (H)",
//         icon: NetworkCell,
//         key: "H",
//         description:
//           "There is a total loss of integrity, or a complete loss of protection. The attacker is able to modify any/all files protected by the impacted component. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the impacted component.",
//       },
//     ],
//   },
//   {
//     title: "Availability (A)",
//     key: "A",
//     description:
//       "This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.",
//     options: [
//       {
//         label: "None (N)",
//         icon: NetworkCell,
//         key: "N",
//         description:
//           "There is no impact to availability within the impacted component.",
//       },
//       {
//         label: "Low (L)",
//         icon: NetworkCell,
//         key: "L",
//         description:
//           "Performance is reduced or there are interruptions in resource availability. The resources in the impacted component are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the impacted component.",
//       },
//       {
//         label: "High (H)",
//         icon: NetworkCell,
//         key: "H",
//         description:
//           "There is a total loss of availability, resulting in the attacker being able to fully deny access to resources in the impacted component; this loss is either sustained or persistent. Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the impacted component.",
//       },
//     ],
//   },
// ];

export const impactButtonConfigs: ToggleButtonConfig[] = [
  {
    title: "Confidentiality (C)",
    key: "C",
    description:
      "This metric measures the impact on the confidentiality of information resources managed by a software component due to a successfully exploited vulnerability. Confidentiality ensures that information is accessible only to those authorized and is shielded from unauthorized access.",
    options: [
      {
        label: "None (N)",
        icon: NetworkCell,
        key: "N",
        description:
          "No impact on confidentiality. The information remains secure and access remains restricted to authorized users only.",
      },
      {
        label: "Low (L)",
        icon: NetworkCell,
        key: "L",
        description:
          "Partial compromise of confidentiality. Unauthorised users gain access to some information, but the extent of information accessed is limited and does not result in a serious loss. Information exposed may include non-sensitive data that does not compromise the overall security of the system.",
      },
      {
        label: "High (H)",
        icon: NetworkCell,
        key: "H",
        description:
          "Complete compromise of confidentiality. Critical data is exposed to unauthorized access, potentially leading to a severe breach of data privacy. This could involve access to personal, financial, or operational information that could seriously impact the organization or individuals if misused.",
      },
    ],
  },
  {
    title: "Integrity (I)",
    key: "I",
    description:
      "This metric evaluates the impact on the integrity of the system resulting from a successfully exploited vulnerability. Integrity involves maintaining the accuracy and completeness of data.",
    options: [
      {
        label: "None (N)",
        icon: NetworkCell,
        key: "N",
        description:
          "No loss of integrity. Data remains accurate and untampered, maintaining its intended and original state.",
      },
      {
        label: "Low (L)",
        icon: NetworkCell,
        key: "L",
        description:
          "Limited impact on integrity. Data alteration is possible, but the modified data does not result in significant harm or misrepresentation of information. Modifications are minor and may involve changes to non-essential system information.",
      },
      {
        label: "High (H)",
        icon: NetworkCell,
        key: "H",
        description:
          "Severe impact on integrity. Data can be altered or destroyed in a way that fundamentally changes its usability and trustworthiness. This could lead to incorrect decision-making based on corrupted data or disrupt essential operations.",
      },
    ],
  },
  {
    title: "Availability (A)",
    key: "A",
    description:
      "This metric measures the impact on the availability of the impacted component following a successfully exploited vulnerability. Availability ensures that authorized users have reliable access to information and associated assets.",
    options: [
      {
        label: "None (N)",
        icon: NetworkCell,
        key: "N",
        description:
          "No impact on availability. All system resources and information remain fully accessible to authorized users at all times.",
      },
      {
        label: "Low (L)",
        icon: NetworkCell,
        key: "L",
        description:
          "Reduced performance or intermittent disruptions. The affected component remains operational but with decreased efficiency. Users may experience slow response times or occasional downtime.",
      },
      {
        label: "High (H)",
        icon: NetworkCell,
        key: "H",
        description:
          "Complete unavailability or persistent disruption of the component. This level of impact could render critical functions or the entire system inoperable, denying all access to system resources and significantly affecting the organization’s operations.",
      },
    ],
  },
];
