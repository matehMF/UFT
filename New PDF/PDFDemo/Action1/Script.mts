file1Path = Environment("TestDir") & "\Resources\TestPDF.pdf"
file2Path = Environment("TestDir") & "\Resources\Digital Signatures - XI Pro.pdf"
filesignature = Environment("TestDir") & "\Resources\SignDemo.pfx"


PdfUtil.Open file1Path

wait 1
PDFApplication("TestPDF.pdf").Maximize
PDFApplication("TestPDF.pdf").PDFPage("page1").PDFEdit("edit2").Set "testing123+"
PDFApplication("TestPDF.pdf").PDFPage("page1").PDFComboBox("comboBox8").Select "Germany"
PDFApplication("TestPDF.pdf").PDFPage("page1").PDFCheckBox("checkbox13").Set "OFF"
PDFApplication("TestPDF.pdf").PDFPage("page1").PDFCheckBox("checkbox13").Set "ON"
PDFApplication("TestPDF.pdf").PDFPage("page1").PDFEdit("edit19").SetSecure "60c9ad55af0927ab9c20e66348930de6a27853bea94f"
PDFApplication("TestPDF.pdf").Save Environment("TestDir") & "\Resources\TestPDF_saved.pdf"
PDFApplication("TestPDF_saved.pdf").Close

PdfUtil.Open file2Path
PDFApplication("Digital Signatures - XI Pro.pd").Maximize
PDFApplication("Digital Signatures - XI Pro.pd").PDFPage("page1").PDFSignatureField("signature2").Setsecure filesignature , "dxdemo"
PDFApplication("Digital Signatures - XI Pro.pd").Save
PDFApplication("Digital Signatures - XI Pro.pd").Close

