/* 
 *  ********* procedure SP_GetSectionList*********
 *  
CREATE procedure SP_GetSectionList
@SectionId varchar(200) = null
AS
BEGIN
select * from tbl_Section
END

    ********* procedure SP_SaveSectionData*********

CREATE procedure SP_SaveSectionData
@DO VARCHAR(100) = NULL,  
@SectionId VARCHAR(100) = NULL,  
@DataParent varchar(500) = NULL,  
@Href varchar(500) = NULL,  
@Heading varchar(max) = NULL,  
@Content varchar(max) = NULL,  
@IsActive bit = NULL,  
@CREATEDBY int = NULL,  
@CREATEDON datetime = NULL,  
@BRANCHID int = NULL,  
@COMPANYID int = NULL
AS
BEGIN
declare @Result varchar(100);
IF NOT EXISTS(SELECT * FROM tbl_Section where SectionId =@SectionId and IsActive = 'true' and BranchId =@BranchId and CompanyId =@CompanyId)
BEGIN
INSERT INTO tbl_Section(DataParent, Href, Heading, Content, IsActive, CREATEDBY, CREATEDDATE, BRANCHID, COMPANYID)
VALUES(@DataParent, @Href, @Heading, @Content, @IsActive, @CREATEDBY, GETDATE(),@BRANCHID, @COMPANYID)
set @Result='SUCCESS';
END
select @Result
END