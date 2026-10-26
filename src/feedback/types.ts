export interface FormDataState {
  engineerName: string;
  clientName: string;
  ticketId: string;
  serviceDate: string;
  q1ReachTime: string;
  q2CompleteTime: string;
  q3SowComparison: string;
  q4PaymentSufficient: string;
  fairPayment: string;
  q5PaymentTime: string;
  q6SowClarity: string;
  q7SiteSupport: string;
  q8JobProblems: string;
  q9Improvements: string;
}

export const initialFormState: FormDataState = {
  engineerName: "",
  clientName: "",
  ticketId: "",
  serviceDate: "",
  q1ReachTime: "",
  q2CompleteTime: "",
  q3SowComparison: "",
  q4PaymentSufficient: "",
  fairPayment: "",
  q5PaymentTime: "",
  q6SowClarity: "",
  q7SiteSupport: "",
  q8JobProblems: "",
  q9Improvements: "",
};
