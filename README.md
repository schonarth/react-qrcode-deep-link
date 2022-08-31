# QR Code Deep Link Generator

This proof-of-concept (POC) aims to demonstrate both how to generate custom QR codes and how to use those as deep-links into your mobile application.

For the current exercise, we will deep-link into a given **Instagram** profile.

You can see it working at https://schonarth.github.io/react-qrcode-deep-link/

## The Moving Parts

This contraption is comprised of the following elements:

* **The QR Code Generator**, where you create a URL with all the parameters you want to eventually pass to the app
* **The Loader**, which sits at the URL to which the QR code points to, and will decide what to do with it.
* **The mobile application**, which needs to be able to receive deep-link parameters

### The QR Code Generator

A QR code is essentially a barcode on steroids. Whereas barcodes could only represent numbers, QR codes can store any arbitrarily long and complex string of text as needed. It's also error-resistant with redundancy included, so damaged or partially covered up codes can usually be read successfully.

QR codes are most often used for URLs, but you can use them for pretty much anything.

| ![Lorem ipsum dolor sit amet...](./public/lipsum.png)
|:--:|
| As plain text

| ![.eslintrc](./public/eslintrc.png)
|:--:|
| As code

Storing plain data as above allows IT devices to get information about a physical parcel with no connection requirements, for instance (just beware of sensitive information).

You can also customize the QR code with fancy visuals. [This is a simple custom theme example](https://schonarth.github.io/react-qrcode-deep-link/?theme=react) for the same app.

Modern phones' cameras can read most QR codes and, conveniently, they can also identify and follow URLs. Which leads us to the second moving part of our little contraption...

### The Loader

In order to create a deep link, you need to both generate QR codes with URLs and a **website** where these URLs point to. Bear in mind, they aren't pointing directly to the mobile app. The first step is a regular page, which can be your main web app or a separate, smaller one just for this purpose.

This web app needs to be able to:

* Receive the URL parameters and know what to do with them;
* Open the mobile app if the page is accessed from such a device **and** the app is installed;
* Send users to the appropriate mobile app store (Apple's or Google's) if the app is not installed;
* Show a message if none of the conditions are met ('please access this from a mobile device')

In the case of this small proof-of-concept, both Loader and Generator are sitting right next to each other, but in a more production-like environment, you'd expect them to be in completely different parts of your application.

### The Mobile App

Finally, your mobile app. The Loader launches it via a special URL for each OS, and any parameters you want to send it are embedded in this URL. The app itself needs to be able to get these parameters and start your intended action based on them.

Also, you need to have them published in order to have functioning redirection to the app stores.

In this example, we are deep-linking into the mobile **Instagram** app, passing it a username so the app opens directly into that profile.