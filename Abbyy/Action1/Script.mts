TextUtil.ClearOCRCache()
image1Path = Environment("TestDir") & "\Resources\TextUtil_Image1.jpg"
image2Path = Environment("TestDir") & "\Resources\TextUtil_Image2.jpg"
image4Path = Environment("TestDir") & "\Resources\TextUtil_Image4.png"
image5Path = Environment("TestDir") & "\Resources\TextUtil_Image5.png"

currentText1 = TextUtil.GetTextFromImage(image1Path)
currentText2 = TextUtil.GetTextFromImage(image2Path)
currentText4 = TextUtil.GetTextFromImage(image4Path)
currentText5 = TextUtil.GetTextFromImage(image5Path)
 
msgbox (currentText1 +" " & vbCrLf & vbCrLf & " "  +currentText2+" " & vbCrLf & vbCrLf & " " + currentText4 +" " & vbCrLf & vbCrLf & " " +currentText5),,"No settings " 

reporter.ReportEvent micPass, "Image 1 Text ", "Image 1 Text is - " + currentText1
reporter.ReportEvent micPass, "Image 2 Text ", "Image 2 Text is - " + currentText2
reporter.ReportEvent micPass, "Image 4 Text", "Image 4 Text is - " + currentText4
reporter.ReportEvent micPass, "Image 5 Text", "Image 5 Text is - " + currentText5

TextUtil.ClearOCRCache()

TextUtil.SetABBYYParameters "fieldMarkingType", True, 1
TextUtil.SetABBYYParameters "caseRecognitionMode", True, 2

currentText1 = TextUtil.GetTextFromImage(image1Path)

msgbox (currentText1),,"CAPS and correct f"

reporter.ReportEvent micPass, "Image 1 Text ", "Image 1 Text is - " + currentText1

TextUtil.ClearOCRCache()
TextUtil.ResetABBYYParameters()

TextUtil.SetABBYYParameters "fieldMarkingType", True, 6

currentText4 = TextUtil.GetTextFromImage(image4Path)

msgbox (currentText4) ,,"Blue is not a letter"

reporter.ReportEvent micPass, "Image 4 Text", "Image 4 Text is - " + currentText4


TextUtil.ClearOCRCache()

TextUtil.SetABBYYParameters "fieldMarkingType", True, 2
TextUtil.SetABBYYParameters "fastMode", True

currentText2 = TextUtil.GetTextFromImage(image2Path)
currentText5 = TextUtil.GetTextFromImage(image5Path)

msgbox (currentText2 +" " & vbCrLf & vbCrLf & " " +currentText5) ,,"No frame, No space"

reporter.ReportEvent micPass, "Image 2 Text ", "Image 2 Text is - " + currentText2
reporter.ReportEvent micPass, "Image 5 Text", "Image 5 Text is - " + currentText5

