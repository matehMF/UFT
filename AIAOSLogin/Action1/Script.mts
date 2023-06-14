webutil.LaunchBrowser "CHROME"
AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Navigate "https://www.advantageonlineshopping.com/"
AIUtil.SetContext Browser("creationtime:=0")
AIUtil("profile").Click
AIUtil("input", "Username").Type "aidemo1"
AIUtil("input", "Password").Type "AIdemo1"
AIUtil("button", "SIGN IN").Click
AIUtil.FindTextBlock("aidemo1").CheckExists True

