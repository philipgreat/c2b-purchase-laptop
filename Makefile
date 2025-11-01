all:
	pake  --targets aarch64-apple-darwin http://127.0.0.1:3000 --name "Jewelry-Buying" --icon ./buying-app.png
local:
	pake  --targets aarch64-apple-darwin ./dist/index.html --name "Jewelry-Buying" --icon ./buying-app.png