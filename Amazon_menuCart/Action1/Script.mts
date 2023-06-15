webutil.LaunchBrowser "CHROME"

Browser("creationtime:=0").Navigate "https://www.amazon.com/"

AIUtil.SetContext Browser("creationtime:=0")

Browser("creationtime:=0").Maximize
AIUtil("shopping_cart").Click
AIUtil.FindTextBlock("Your Amazon Cart is empty").CheckExists True
AIUtil("menu").Click
AIUtil("close").Click

