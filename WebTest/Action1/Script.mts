SystemUtil.Run "iexplore.exe", "https://microfocusinternational.sharepoint.com/sites/infocus/Pages/index.aspx?route=home"

If Browser("My InFocus").Exist Then
	Reporter.ReportEvent micPass, "Exist test - open browser", "Passed"
Else
	Reporter.ReportEvent micFail, "Exist test - open browser", "Failed"
End If

Browser("My InFocus").CloseAllTabs

If (Browser("My InFocus").Exist = False) Then
	Reporter.ReportEvent micPass, "Exist test - closed browser", "Passed"
Else
	Reporter.ReportEvent micFail, "Exist test - closed browser", "Failed"
End If
