export interface JobDetails {
    status: string;
    workPerHourWeek: number;
    dateHired: string;
    department: string;
    position: string;
    employmentType: string;
}

export interface PayDetails {
    wageCalculation: string;
    payroll: string;
    bankName: string;
    accountNo: string;
    bankBranch: string;
    ifscCode: string;
    issueDate: string;
    issueMonth: string;
    issuedAmount: number;
}

export interface JobState {
    jobDetails: JobDetails | null;
    loading: boolean;
    error: string | null;
}

export interface PayState {
    payDetails: PayDetails | null;
    loading: boolean;
    error: string | null;
}