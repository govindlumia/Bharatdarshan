use PTS

//Type Tables Script 15-1-2020
    + function ($) {"Type Tables Script";
        CREATE TYPE[dbo].[AttendanceMasterType] AS TABLE(
            [AttendanceId][int] NULL,
            [MemberId][int] NULL,
            [MemberName][varchar](150) NULL,
            [Date][datetime] NULL,
            [Attendance][varchar](10) NULL,
            [LeaveType][varchar](10) NULL,
            [ReasonForLeave][varchar](150) NULL,
            [Branchid][int] NULL,
            [Created][datetime] NULL,
            [CreatedBy][varchar](50) NULL,
            [Updated][datetime] NULL,
            [UpdatedBy][varchar](50) NULL,
            [IsActive][bit] NULL,
            [AttendanceDate][varchar](10) NULL,
            [ADay][int] NULL,
            [AMonth][int] NULL,
            [AYear][int] NULL,
            [FYear][varchar](100) NULL
        )
        GO
        /****** Object:  UserDefinedTableType [dbo].[TEMPTASK]    Script Date: 03/01/2020 5:05:31 PM ******/
        CREATE TYPE[dbo].[TEMPTASKType] AS TABLE(
            [Task][varchar](500) NULL,
            [Status][varchar](500) NULL
        )
        GO
        /****** Object:  Table [dbo].[ExceptionTrackDetails]    Script Date: 03/01/2020 5:05:32 PM ******/

        CREATE TYPE[dbo].[ExceptionTrackDetailsType] AS TABLE(
            [ExceptionID][bigint] IDENTITY(1, 1) NOT NULL,
            [MethodName][varchar](100) NULL,
            [ControllerName][varchar](100) NULL,
            [StackTrace][varchar](max) NULL,
            [CreatedOn][datetime] NULL,
            [Message][varchar](max) NULL,
            [IPAddress][varchar](100) NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_CompanyDetail]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_CompanyDetailType] AS TABLE(
            [CompanyID][int] IDENTITY(1, 1) NOT NULL,
            [CompanyName][varchar](100) NULL,
            [ContactNo_M][varchar](20) NULL,
            [ContactNo_L][varchar](20) NULL,
            [EmailID][varchar](200) NULL,
            [CompanyAddress][varchar](200) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_DesMaster]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_DesMasterType] AS TABLE(
            [DesID][int] IDENTITY(1, 1) NOT NULL,
            [DesName][varchar](100) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[TBL_EMAIL_DAYS]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[TBL_EMAIL_DAYSType] AS TABLE(
            [SNO][int] IDENTITY(1, 1) NOT NULL,
            [SIDs][varchar](100) NULL,
            [FREQUENCY][varchar](100) NULL,
            [EMAIL_DAY][varchar](100) NULL,
            [EMAIL_MONTH][varchar](100) NULL,
            [DAY_BEFORE][varchar](100) NULL,
            [LAST_DAY][varchar](100) NULL,
            [CREATEDBY][varchar](100) NULL,
            [CREATEDON][datetime] NULL,
            [UPDATEDBY][varchar](100) NULL,
            [UPDATEDON][datetime] NULL,
            [ISACTIVE][varchar](100) NULL
        )
        GO
        /****** Object:  Table [dbo].[TBL_EMAIL_Log]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[TBL_EMAIL_LogType] AS TABLE(
            [SNO][int] IDENTITY(1, 1) NOT NULL,
            [EMAILTO][varchar](max) NULL,
            [EMAILCC][varchar](300) NULL,
            [EMAILSUBJECT][varchar](200) NULL,
            [EMAILMESSAGE][varchar](max) NULL,
            [EMAILRESULT][varchar](100) NULL,
            [CREATEDON][datetime] NULL
        )
        GO
        /****** Object:  Table [dbo].[TBL_EMAIL_SCHEDULER]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[TBL_EMAIL_SCHEDULERType] AS TABLE(
            [SNO][int] IDENTITY(1, 1) NOT NULL,
            [ACT][varchar](100) NULL,
            [RETURNTYPE][varchar](300) NULL,
            [COMPLIANCE][varchar](max) NULL,
            [FREQUENCY][varchar](100) NULL,
            [DUEON][varchar](100) NULL,
            [CREATEDBY][varchar](100) NULL,
            [CREATEDON][datetime] NULL,
            [UPDATEDBY][varchar](100) NULL,
            [UPDATEDON][datetime] NULL,
            [ISACTIVE][varchar](100) NULL
        )
        GO
        /****** Object:  Table [dbo].[TBL_EVENTS]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[TBL_EVENTSType] AS TABLE(
            [SNO][int] IDENTITY(1, 1) NOT NULL,
            [EVENT_NAME][varchar](100) NULL,
            [EVENT_DESCRIPTION][varchar](300) NULL,
            [EVENT_DATE][varchar](max) NULL,
            [CREATEDBY][varchar](100) NULL,
            [CREATEDON][datetime] NULL,
            [UPDATEDBY][varchar](100) NULL,
            [UPDATEDON][datetime] NULL,
            [ISACTIVE][varchar](100) NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_HolidayMaster]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_HolidayMasterType] AS TABLE(
            [Holidayid][int] IDENTITY(1, 1) NOT NULL,
            [HolidayName][varchar](50) NULL,
            [HolidayDate][date] NULL,
            [Description][varchar](50) NULL,
            [Branchid][int] NULL,
            [IsActive][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_LeaveApply]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_LeaveApplyType] AS TABLE(
            [SNo][int] IDENTITY(1, 1) NOT NULL,
            [MemberId][int] NULL,
            [MemberName][varchar](150) NULL,
            [TeamLeader][varchar](150) NULL,
            [FromDate][datetime] NULL,
            [ToDate][datetime] NULL,
            [TotalDay][varchar](10) NULL,
            [Approval][varchar](10) NULL,
            [Reason][varchar](150) NULL,
            [Branchid][int] NULL,
            [Created][datetime] NULL,
            [CreatedBy][varchar](50) NULL,
            [Updated][datetime] NULL,
            [UpdatedBy][varchar](50) NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_MemberBankDetail]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_MemberBankDetailType] AS TABLE(
            [SNO][int] IDENTITY(1, 1) NOT NULL,
            [MemberID][varchar](100) NULL,
            [NameInBank][varchar](100) NULL,
            [ACNumber][varchar](100) NULL,
            [BankName][varchar](200) NULL,
            [Mobile][varchar](100) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_MemberCost]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_MemberCostType] AS TABLE(
            [MemberID][int] NULL,
            [MemberHCost][varchar](100) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_MemberDetail]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_MemberDetailType] AS TABLE(
            [MemberID][int] IDENTITY(1, 1) NOT NULL,
            [Name][varchar](100) NULL,
            [UserName][varchar](100) NULL,
            [ContactNo_M][varchar](20) NULL,
            [EmailID][varchar](200) NULL,
            [Password][varchar](100) NULL,
            [DOB][datetime] NULL,
            [Gender][varchar](100) NULL,
            [Designation][varchar](100) NULL,
            [ProfilePicture][varchar](max) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ROLLID][int] NULL,
            [TEAMID][int] NULL,
            [ISACTIVE][bit] NULL,
            [Occupied][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_MonthList]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_MonthListType] AS TABLE(
            [Id][int] IDENTITY(1, 1) NOT NULL,
            [MonthName][varchar](100) NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_PortalUpdate]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_PortalUpdateType] AS TABLE(
            [SNo][int] IDENTITY(1, 1) NOT NULL,
            [ModuleName][varchar](50) NULL,
            [ModuleDes][varchar](max) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [Branchid][int] NULL,
            [IsActive][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_ProjectCompany]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_ProjectCompanyType] AS TABLE(
            [ID][int] IDENTITY(1, 1) NOT NULL,
            [ProjectID][int] NULL,
            [Companyid][varchar](100) NULL,
            [CompanyName][varchar](100) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_ProjectDetail]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_ProjectDetailType] AS TABLE(
            [ProjectID][int] IDENTITY(1, 1) NOT NULL,
            [ProjectName][varchar](100) NULL,
            [ReportingPerson][varchar](100) NULL,
            [Nature][varchar](200) NULL,
            [Status][varchar](200) NULL,
            [NoOfTask][varchar](100) NULL,
            [StartDate][datetime] NULL,
            [EndDate][datetime] NULL,
            [Company][varchar](100) NULL,
            [Team][varchar](100) NULL,
            [ProjectType][varchar](100) NULL,
            [Attachment][varchar](max) NULL,
            [Remark][varchar](max) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_ProjectMember]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_ProjectMemberType] AS TABLE(
            [Sno][int] IDENTITY(1, 1) NOT NULL,
            [ProjectID][int] NULL,
            [MemberID][int] NULL,
            [MemberName][varchar](100) NULL,
            [TotalHrs][varchar](100) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_Projecttype]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_ProjectType] AS TABLE(
            [PTypeID][int] IDENTITY(1, 1) NOT NULL,
            [PTypeName][varchar](100) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_Reimbursement]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_ReimbursementType] AS TABLE(
            [Id][int] IDENTITY(1, 1) NOT NULL,
            [ReimDate][date] NULL,
            [Client][varchar](50) NULL,
            [ReimType][varchar](50) NULL,
            [Amount][varchar](50) NULL,
            [Remark][varchar](50) NULL,
            [Attachment][varchar](50) NULL,
            [Status][varchar](50) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [Branchid][int] NULL,
            [IsActive][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_ResetPasswordOTP]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_ResetPasswordOTPType] AS TABLE(
            [Id][int] IDENTITY(1, 1) NOT NULL,
            [Email][varchar](100) NULL,
            [OTP][varchar](100) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_RoleMaster]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_RoleMasterType] AS TABLE(
            [RoleID][int] IDENTITY(1, 1) NOT NULL,
            [RoleName][varchar](100) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_TaskDetail]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_TaskDetailType] AS TABLE(
            [TaskID][int] IDENTITY(1, 1) NOT NULL,
            [ProjectID][int] NULL,
            [TaskName][varchar](100) NULL,
            [Complete][varchar](100) NULL,
            [Remark][varchar](max) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_TeamMaster]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_TeamMasterType] AS TABLE(
            [TeamID][int] IDENTITY(1, 1) NOT NULL,
            [TeamName][varchar](100) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
        /****** Object:  Table [dbo].[tbl_Timesheet]    Script Date: 03/01/2020 5:05:32 PM ******/
        CREATE TYPE[dbo].[tbl_TimesheetType] AS TABLE(
            [TaskID][int] IDENTITY(1, 1) NOT NULL,
            [ClientID][int] NULL,
            [ProjectID][int] NULL,
            [MemberID][int] NULL,
            [TaskName][varchar](100) NULL,
            [TaskDate][datetime] NULL,
            [TaskHours][int] NULL,
            [TaskRemark][varchar](100) NULL,
            [CREATEDBY][int] NULL,
            [CREATEDDATE][datetime] NULL,
            [UPDATEDBY][int] NULL,
            [UPDATEDDATE][datetime] NULL,
            [BRANCHID][int] NULL,
            [ISACTIVE][bit] NULL
        )
        GO
    }

//Type Tables Script 15-1-2020