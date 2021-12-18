'*************************************************************************************************************
'#Script Name                   					  :      Template Test
'# Description                     	   					:    
'#Created By                        				   :      Wipro Team
'# Created Date                                      :     11/11/2014
'#Pre Conditions              	                    :      data                                                       
'#Post Conditions           	                   :                                                 
'# Manual Test Cases Covered       :     
'#                                                                       
'# Defects Affecting the Script            :     
'# Work Around                                       :     
'# Automated on Build/Release       :         
'*************************************************************************************************************

' Setting the initialization of variables
	Environment.Value("DataTableFlag") = TRUE
	Call UdfScriptInitialization()

' Variable Declaration
	Dim  intDTRowCount, intDTRowIndex
	Dim WshShell
	
'1 - Main header of the script
	Call UdfHTMLResultSectionHeader(objHTMLResultFile, "1 - TEST Header" )

 '1.0 Login to Endur application
	UdfLoginEndurApp()
	
	intDTRowCount = DataTable.GetRowCount
	For intDTRowIndex = 1 To intDTRowCount 
		DataTable.SetCurrentRow(intDTRowIndex)
		If DataTable.value("in_Execute")="Y" or  DataTable.value("in_Execute")="" Then
			Call UdfHTMLResultSectionHeader(objHTMLResultFile, "ITERATION -  " & intDTRowIndex)
            ' Start Coding from here
			'Statements
								
			Call UdfHTMLResultMessage(objHTMLResultFile,"Sample execution results")
			Do While True

				
				Exit Do
			Loop ' Loop for Do While
		End If ' End If for Execute flag
	Next ' Next for For

	' Logoff Endur application
	UdfLogoffEndurApp()
	Call UdfEndAndMoveResult()

'--------------------------------------------------------------   MAIN CODE END   -----------------------------------------------------------------------------------------------------------
'---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'Insert Script specicfic functions here
