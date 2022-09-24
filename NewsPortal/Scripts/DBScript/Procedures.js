use PTS

    //Type Procedures Script 15-1-2020
    + function ($) {
        "Type Procedures Script";
        --******************* SP_TYPE_tbl_ResetPasswordOTP *****************
            ALTER PROCEDURE SP_TYPE_tbl_ResetPasswordOTP
        @TemptTable tbl_ResetPasswordOTPType READONLY
        AS
        BEGIN
        TRUNCATE TABLE tbl_ResetPasswordOTP
        SET IDENTITY_INSERT tbl_ResetPasswordOTP ON
        INSERT INTO tbl_ResetPasswordOTP(Id, Email, OTP, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT Id, Email, OTP, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_ResetPasswordOTP OFF
        END
        GO
        --******************* SP_TYPE_tbl_HolidayMaster *****************
            ALTER PROCEDURE SP_TYPE_tbl_HolidayMaster
        @TemptTable tbl_HolidayMasterType READONLY
        AS
        BEGIN
        TRUNCATE TABLE tbl_HolidayMaster
        SET IDENTITY_INSERT tbl_HolidayMaster ON
        INSERT INTO tbl_HolidayMaster(Holidayid, HolidayName, HolidayDate, Description, Branchid, IsActive)
        SELECT Holidayid, HolidayName, HolidayDate, Description, Branchid, IsActive FROM @TemptTable
        SET IDENTITY_INSERT tbl_HolidayMaster OFF
        END
        GO

        --******************* SP_TYPE_tbl_ProjectCompany *****************
            ALTER PROCEDURE SP_TYPE_tbl_ProjectCompany
        @TemptTable tbl_ProjectCompanyType READONLY
        AS
        BEGIN
        TRUNCATE TABLE tbl_ProjectCompany
        SET IDENTITY_INSERT tbl_ProjectCompany ON
        INSERT INTO tbl_ProjectCompany(ID, ProjectID, Companyid, CompanyName, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT ID, ProjectID, Companyid, CompanyName, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_ProjectCompany OFF
        END
        GO

        --******************* SP_TYPE_tbl_Timesheet *****************
            ALTER PROCEDURE SP_TYPE_tbl_Timesheet
        @TemptTable tbl_TimesheetType READONLY
        AS
        BEGIN
        TRUNCATE TABLE tbl_Timesheet
        SET IDENTITY_INSERT tbl_Timesheet ON
        INSERT INTO tbl_Timesheet(TaskID, ClientID, ProjectID, MemberID, TaskName, TaskDate, TaskHours, TaskRemark, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT TaskID, ClientID, ProjectID, MemberID, TaskName, TaskDate, TaskHours, TaskRemark, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_Timesheet OFF
        END
        GO

        --******************* SP_TYPE_tbl_PortalUpdate *****************
            ALTER PROCEDURE SP_TYPE_tbl_PortalUpdate
        @TemptTable tbl_PortalUpdateType READONLY
        AS
        BEGIN
        TRUNCATE TABLE tbl_PortalUpdate
        SET IDENTITY_INSERT tbl_PortalUpdate ON
        INSERT INTO tbl_PortalUpdate(SNo, ModuleName, ModuleDes, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, Branchid, IsActive)
        SELECT SNo, ModuleName, ModuleDes, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, Branchid, IsActive FROM @TemptTable
        SET IDENTITY_INSERT tbl_PortalUpdate OFF
        END
        GO

        --******************* SP_TYPE_tbl_ProjectDetail *****************
            ALTER PROCEDURE SP_TYPE_tbl_ProjectDetail
        @TemptTable tbl_ProjectDetailType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_ProjectDetail
        SET IDENTITY_INSERT tbl_ProjectDetail ON
        INSERT INTO tbl_ProjectDetail(ProjectID, ProjectName, ReportingPerson, Nature, Status, NoOfTask, StartDate, EndDate, Company, Team, ProjectType, Attachment, Remark, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT ProjectID, ProjectName, ReportingPerson, Nature, Status, NoOfTask, StartDate, EndDate, Company, Team, ProjectType, Attachment, Remark, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_ProjectDetail OFF
        END
        GO

        --******************* SP_TYPE_AttendanceMaster *****************
            ALTER PROCEDURE SP_TYPE_AttendanceMaster
        @TemptTable AttendanceMasterType READONLY
        AS
        BEGIN TRUNCATE TABLE AttendanceMaster
        SET IDENTITY_INSERT AttendanceMaster ON
        INSERT INTO AttendanceMaster(AttendanceId, MemberId, MemberName, Date, Attendance, LeaveType, ReasonForLeave, Branchid, Created, CreatedBy, Updated, UpdatedBy, IsActive, AttendanceDate, ADay, AMonth, AYear, FYear)
        SELECT AttendanceId, MemberId, MemberName, Date, Attendance, LeaveType, ReasonForLeave, Branchid, Created, CreatedBy, Updated, UpdatedBy, IsActive, AttendanceDate, ADay, AMonth, AYear, FYear FROM @TemptTable
        SET IDENTITY_INSERT AttendanceMaster OFF
        END
        GO

        --******************* SP_TYPE_tbl_ProjectMember *****************
            ALTER PROCEDURE SP_TYPE_tbl_ProjectMember
        @TemptTable tbl_ProjectMemberType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_ProjectMember
        SET IDENTITY_INSERT tbl_ProjectMember ON
        INSERT INTO tbl_ProjectMember(Sno, ProjectID, MemberID, MemberName, TotalHrs, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT Sno, ProjectID, MemberID, MemberName, TotalHrs, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_ProjectMember OFF
        END
        GO

        --******************* SP_TYPE_tbl_MonthList *****************
            ALTER PROCEDURE SP_TYPE_tbl_MonthList
        @TemptTable tbl_MonthListType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_MonthList
        SET IDENTITY_INSERT tbl_MonthList ON
        INSERT INTO tbl_MonthList(Id, [MonthName])
        SELECT Id, [MonthName] FROM @TemptTable
        SET IDENTITY_INSERT tbl_MonthList OFF
        END
        GO

        --******************* SP_TYPE_tbl_TaskDetail *****************
            ALTER PROCEDURE SP_TYPE_tbl_TaskDetail
        @TemptTable tbl_TaskDetailType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_TaskDetail
        SET IDENTITY_INSERT tbl_TaskDetail ON
        INSERT INTO tbl_TaskDetail(TaskID, ProjectID, TaskName, Complete, Remark, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT TaskID, ProjectID, TaskName, Complete, Remark, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_TaskDetail OFF
        END
        GO

        --******************* SP_TYPE_tbl_MemberCost *****************
            ALTER PROCEDURE SP_TYPE_tbl_MemberCost
        @TemptTable tbl_MemberCostType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_MemberCost
        SET IDENTITY_INSERT tbl_MemberCost ON
        INSERT INTO tbl_MemberCost(MemberID, MemberHCost, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT MemberID, MemberHCost, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_MemberCost OFF
        END
        GO
        --******************* SP_TYPE_TBL_EMAIL_SCHEDULER *****************
            ALTER PROCEDURE SP_TYPE_TBL_EMAIL_SCHEDULER
        @TemptTable TBL_EMAIL_SCHEDULERType READONLY
        AS
        BEGIN TRUNCATE TABLE TBL_EMAIL_SCHEDULER
        SET IDENTITY_INSERT TBL_EMAIL_SCHEDULER ON
        INSERT INTO TBL_EMAIL_SCHEDULER(SNO, ACT, RETURNTYPE, COMPLIANCE, FREQUENCY, DUEON, CREATEDBY, CREATEDON, UPDATEDBY, UPDATEDON, ISACTIVE)
        SELECT SNO, ACT, RETURNTYPE, COMPLIANCE, FREQUENCY, DUEON, CREATEDBY, CREATEDON, UPDATEDBY, UPDATEDON, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT TBL_EMAIL_SCHEDULER OFF
        END
        GO

        --******************* SP_TYPE_tbl_MemberDetail *****************
            ALTER PROCEDURE SP_TYPE_tbl_MemberDetail
        @TemptTable tbl_MemberDetailType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_MemberDetail
        SET IDENTITY_INSERT tbl_MemberDetail ON
        INSERT INTO tbl_MemberDetail(MemberID, Name, UserName, ContactNo_M, EmailID, Password, DOB, Gender, Designation, ProfilePicture, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ROLLID, TEAMID, ISACTIVE, Occupied)
        SELECT MemberID, Name, UserName, ContactNo_M, EmailID, Password, DOB, Gender, Designation, ProfilePicture, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ROLLID, TEAMID, ISACTIVE, Occupied FROM @TemptTable
        SET IDENTITY_INSERT tbl_MemberDetail OFF
        END
        GO
        --******************* SP_TYPE_tbl_TeamMaster *****************
            ALTER PROCEDURE SP_TYPE_tbl_TeamMaster
        @TemptTable tbl_TeamMasterType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_TeamMaster
        SET IDENTITY_INSERT tbl_TeamMaster ON
        INSERT INTO tbl_TeamMaster(TeamID, TeamName, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT TeamID, TeamName, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_TeamMaster OFF
        END
        GO

        --******************* SP_TYPE_tbl_RoleMaster *****************
            ALTER PROCEDURE SP_TYPE_tbl_RoleMaster
        @TemptTable tbl_RoleMasterType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_RoleMaster
        SET IDENTITY_INSERT tbl_RoleMaster ON
        INSERT INTO tbl_RoleMaster(RoleID, RoleName, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT RoleID, RoleName, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_RoleMaster OFF
        END
        GO

        --******************* SP_TYPE_tbl_DesMaster *****************
            ALTER PROCEDURE SP_TYPE_tbl_DesMaster
        @TemptTable tbl_DesMasterType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_DesMaster
        SET IDENTITY_INSERT tbl_DesMaster ON
        INSERT INTO tbl_DesMaster(DesID, DesName, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT DesID, DesName, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_DesMaster OFF
        END
        GO
        --******************* SP_TYPE_TBL_EMAIL_DAYS *****************
            ALTER PROCEDURE SP_TYPE_TBL_EMAIL_DAYS
        @TemptTable TBL_EMAIL_DAYSType READONLY
        AS
        BEGIN TRUNCATE TABLE TBL_EMAIL_DAYS
        SET IDENTITY_INSERT TBL_EMAIL_DAYS ON
        INSERT INTO TBL_EMAIL_DAYS(SNO, SIDs, FREQUENCY, EMAIL_DAY, EMAIL_MONTH, DAY_BEFORE, LAST_DAY, CREATEDBY, CREATEDON, UPDATEDBY, UPDATEDON, ISACTIVE)
        SELECT SNO, SIDs, FREQUENCY, EMAIL_DAY, EMAIL_MONTH, DAY_BEFORE, LAST_DAY, CREATEDBY, CREATEDON, UPDATEDBY, UPDATEDON, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT TBL_EMAIL_DAYS OFF
        END
        GO

        --******************* SP_TYPE_ExceptionTrackDetails *****************
            ALTER PROCEDURE SP_TYPE_TBL_ExceptionTrackDetails
        @TemptTable ExceptionTrackDetailsType READONLY
        AS
        BEGIN TRUNCATE TABLE ExceptionTrackDetails
        SET IDENTITY_INSERT ExceptionTrackDetails ON
        INSERT INTO ExceptionTrackDetails(ExceptionID, MethodName, ControllerName, StackTrace, CreatedOn, Message, IPAddress)
        SELECT ExceptionID, MethodName, ControllerName, StackTrace, CreatedOn, Message, IPAddress FROM @TemptTable
        SET IDENTITY_INSERT ExceptionTrackDetails OFF
        END
        GO

        --******************* SP_TYPE_tbl_LeaveApply *****************
            ALTER PROCEDURE SP_TYPE_tbl_LeaveApply
        @TemptTable tbl_LeaveApplyType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_LeaveApply
        SET IDENTITY_INSERT tbl_LeaveApply ON
        INSERT INTO tbl_LeaveApply(SNo, MemberId, MemberName, TeamLeader, FromDate, ToDate, TotalDay, Approval, Reason, Branchid, Created, CreatedBy, Updated, UpdatedBy)
        SELECT SNo, MemberId, MemberName, TeamLeader, FromDate, ToDate, TotalDay, Approval, Reason, Branchid, Created, CreatedBy, Updated, UpdatedBy FROM @TemptTable
        SET IDENTITY_INSERT tbl_LeaveApply OFF
        END
        GO
        --******************* SP_TYPE_TBL_EMAIL_Log *****************
            ALTER PROCEDURE SP_TYPE_TBL_EMAIL_Log
        @TemptTable TBL_EMAIL_LogType READONLY
        AS
        BEGIN TRUNCATE TABLE TBL_EMAIL_Log
        SET IDENTITY_INSERT TBL_EMAIL_Log ON
        INSERT INTO TBL_EMAIL_Log(SNO, EMAILTO, EMAILCC, EMAILSUBJECT, EMAILMESSAGE, EMAILRESULT, CREATEDON)
        SELECT SNO, EMAILTO, EMAILCC, EMAILSUBJECT, EMAILMESSAGE, EMAILRESULT, CREATEDON FROM @TemptTable
        SET IDENTITY_INSERT TBL_EMAIL_Log OFF
        END
        GO

        --******************* SP_TYPE_tbl_CompanyDetail *****************
            ALTER PROCEDURE SP_TYPE_tbl_CompanyDetail
        @TemptTable tbl_CompanyDetailType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_CompanyDetail
        SET IDENTITY_INSERT tbl_CompanyDetail ON
        INSERT INTO tbl_CompanyDetail(CompanyID, CompanyName, ContactNo_M, ContactNo_L, EmailID, CompanyAddress, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT CompanyID, CompanyName, ContactNo_M, ContactNo_L, EmailID, CompanyAddress, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_CompanyDetail OFF
        END
        GO

        --******************* SP_TYPE_TBL_EVENTS *****************
            ALTER PROCEDURE SP_TYPE_TBL_EVENTS
        @TemptTable TBL_EVENTSType READONLY
        AS
        BEGIN TRUNCATE TABLE TBL_EVENTS
        SET IDENTITY_INSERT TBL_EVENTS ON
        INSERT INTO TBL_EVENTS(SNO, EVENT_NAME, EVENT_DESCRIPTION, EVENT_DATE, CREATEDBY, CREATEDON, UPDATEDBY, UPDATEDON, ISACTIVE)
        SELECT SNO, EVENT_NAME, EVENT_DESCRIPTION, EVENT_DATE, CREATEDBY, CREATEDON, UPDATEDBY, UPDATEDON, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT TBL_EVENTS OFF
        END
        GO

        --******************* SP_TYPE_tbl_Projecttype *****************
        ALTER PROCEDURE SP_TYPE_tbl_Projecttype
        @TemptTable tbl_ProjectType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_Projecttype
        SET IDENTITY_INSERT tbl_Projecttype ON
        INSERT INTO tbl_Projecttype(PTypeID, PTypeName, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT PTypeID, PTypeName, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_Projecttype OFF
        END
        GO
        --******************* SP_TYPE_tbl_Reimbursement *****************
            ALTER PROCEDURE SP_TYPE_tbl_Reimbursement
        @TemptTable tbl_ReimbursementType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_Reimbursement
        SET IDENTITY_INSERT tbl_Reimbursement ON
        INSERT INTO tbl_Reimbursement(Id, ReimDate, Client, ReimType, Amount, Remark, Attachment, Status, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, Branchid, IsActive)
        SELECT Id, ReimDate, Client, ReimType, Amount, Remark, Attachment, Status, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, Branchid, IsActive FROM @TemptTable
        SET IDENTITY_INSERT tbl_Reimbursement OFF
        END
        GO

        --******************* SP_TYPE_tbl_MemberBankDetail *****************
            ALTER PROCEDURE SP_TYPE_tbl_MemberBankDetail
        @TemptTable tbl_MemberBankDetailType READONLY
        AS
        BEGIN TRUNCATE TABLE tbl_MemberBankDetail
        SET IDENTITY_INSERT tbl_MemberBankDetail ON
        INSERT INTO tbl_MemberBankDetail(SNO, MemberID, NameInBank, ACNumber, BankName, Mobile, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE)
        SELECT SNO, MemberID, NameInBank, ACNumber, BankName, Mobile, CREATEDBY, CREATEDDATE, UPDATEDBY, UPDATEDDATE, BRANCHID, ISACTIVE FROM @TemptTable
        SET IDENTITY_INSERT tbl_MemberBankDetail OFF
        END
        GO
    }

    //Procedures Script 15-1-2020

    //Procedures Name List Script 15-1-2020
    + function ($) {
        use PTS
        --******************* SP_TYPE_tbl_ResetPasswordOTP *****************
            SP_TYPE_tbl_ResetPasswordOTP

        --******************* SP_TYPE_tbl_HolidayMaster *****************
            SP_TYPE_tbl_HolidayMaster


        --******************* SP_TYPE_tbl_ProjectCompany *****************
            SP_TYPE_tbl_ProjectCompany


        --******************* SP_TYPE_tbl_Timesheet *****************
            SP_TYPE_tbl_Timesheet


        --******************* SP_TYPE_tbl_PortalUpdate *****************
            SP_TYPE_tbl_PortalUpdate


        --******************* SP_TYPE_tbl_ProjectDetail *****************
            SP_TYPE_tbl_ProjectDetail


        --******************* SP_TYPE_AttendanceMaster *****************
            SP_TYPE_AttendanceMaster


        --******************* SP_TYPE_tbl_ProjectMember *****************
            SP_TYPE_tbl_ProjectMember


        --******************* SP_TYPE_tbl_MonthList *****************
            SP_TYPE_tbl_MonthList

        --******************* SP_TYPE_tbl_TaskDetail *****************
            SP_TYPE_tbl_TaskDetail


        --******************* SP_TYPE_tbl_MemberCost *****************
            SP_TYPE_tbl_MemberCost

        --******************* SP_TYPE_TBL_EMAIL_SCHEDULER *****************
            SP_TYPE_TBL_EMAIL_SCHEDULER


        --******************* SP_TYPE_tbl_MemberDetail *****************
            SP_TYPE_tbl_MemberDetail

        --******************* SP_TYPE_tbl_TeamMaster *****************
            SP_TYPE_tbl_TeamMaster


        --******************* SP_TYPE_tbl_RoleMaster *****************
            SP_TYPE_tbl_RoleMaster


        --******************* SP_TYPE_tbl_DesMaster *****************
            SP_TYPE_tbl_DesMaster

        --******************* SP_TYPE_TBL_EMAIL_DAYS *****************
            SP_TYPE_TBL_EMAIL_DAYS


        --******************* SP_TYPE_ExceptionTrackDetails *****************
            SP_TYPE_TBL_ExceptionTrackDetails


        --******************* SP_TYPE_tbl_LeaveApply *****************
            SP_TYPE_tbl_LeaveApply

        --******************* SP_TYPE_TBL_EMAIL_Log *****************
            SP_TYPE_TBL_EMAIL_Log


        --******************* SP_TYPE_tbl_CompanyDetail *****************
            SP_TYPE_tbl_CompanyDetail


        --******************* SP_TYPE_TBL_EVENTS *****************
            SP_TYPE_TBL_EVENTS


        --******************* SP_TYPE_tbl_Projecttype *****************
            SP_TYPE_tbl_Projecttype

        --******************* SP_TYPE_tbl_Reimbursement *****************
            SP_TYPE_tbl_Reimbursement


        --******************* SP_TYPE_tbl_MemberBankDetail *****************
            SP_TYPE_tbl_MemberBankDetail

    }