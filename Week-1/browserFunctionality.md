# What happens when you type an URL in the browser and press Enter?

## The main components of a web browser:
![image](https://user-images.githubusercontent.com/12750852/201462803-8edbc471-39d4-4317-bd45-d28d1b3a75d3.png)
1. **The User Interface:** The user interface is the space where User interacts with the browser. 
Imagine you type https://www.holbertonschool.com in the search bar
![image](https://user-images.githubusercontent.com/12750852/201462375-0ecbb4c5-9355-4a51-9963-30fdb12b34a8.png)
URL stands for Uniform Resource Locator and it's an address that points to the place you want to visit. 
Looking at the image above, the first part you see is 'https' that indicates the browser which protocol (set of rules)
should be used to establish the communication on the network. It can be FTP, HTTP, HTTPS, etc. The HTTPS protocol is the one used here and it will be explained later.
- Subdomain: also known as third-level domain, is a subdivision of the domain name that is used to organize the web content into main categories, and in a URL indicates a particular page of the website the browser should serve. In the example, 'www' is the subdomain, this is given by default and is often used to land the home page of a website.
- Second-level Domain: is the name of the website, it is unique for the company or person that registers it, helping people to know what brand's site they are visiting. In the example, 'holbertonschool' is the name of the website for Holberton School.
- Top-level domain: is the highest level in the DNS and it specifies the type of entity under which the website is registered on the internet, some of the most common TLDs are 'org', 'edu', 'com', etc. In the example, 'com' is used to identify the website as a commercial entity.
![image](https://user-images.githubusercontent.com/12750852/201464446-103e489c-8f17-44cd-acc0-e4d4b9ece504.png)

2. **The Browser Engine:** The browser engine works as a bridge between the User interface and the rendering engine. According to the inputs from various user interfaces, it queries and manipulates the rendering engine.
- Well, once you hit Enter, the browser brakes down the URL in pieces as shown above, and looks for the hostname in its cache. If the browser does not find the hostname in there, then it asks outside. And the DNS comes into action, it takes the human-readable hostname and translates it to its corresponding computer-friendly IP address to serve the requested content.
- A DNS request, where your computer is the DNS client demanding information to a DNS server. You can think of this process as a bus trip and the first stop, that can be the only one or not, is your Internet Service Provider (ISP) DNS server (from now on called resolver) to check if it can respond properly to the request. This DNS server will search into its local cache and if it handles the request, the DNS process ends here returning the IP address for Holberton School's website allowing the browser to serve it up to you. However, if the resolver cannot handle the request, then a recursive query will start until the IP address is found.
- So, following the bus trip, the second stop is a DNS root nameserver. The root domain does not have a formal name in the DNS hierarchy and its label is an empty string, which is represented by an implicit dot (.) that is at the end of every URL. The resolver requests the DNS root nameserver and it responds with the IP address of a TLD DNS Server, in this case 'com', that stores the information for its domains.
- And the bus gets to the third stop, where the resolver requests to the .com TLD and the TLD DNS server responds with the address of the domain’s nameserver, holbertonschool.com. Lastly, the bus leaves to the domain’s nameserver where the ISP DNS server makes a request and the IP address for 'hobertonschool.com' is then returned.
- After all of this trip, the bus returns to the starting point, then the resolver responds to the browser with the IP address of the domain requested at the beginning. Besides this, the resolver will store the collected information into its local cache and it will not have to repeat the entire process if the same query comes in the future, it can now provide the Holberton School's IP address directly.
![image](https://user-images.githubusercontent.com/12750852/201464757-3022fb29-427b-436c-be83-0e2442234e9b.png)

3. **The Rendering Engine:** The rendering engine, as the name suggests is responsible for rendering the requested web page on the browser screen. The rendering engine interprets the HTML, XML documents and images that are formatted using CSS and generates the layout that is displayed in the User Interface. However, using plugins or extensions, it can display other types data also. Different browsers user different rendering engines:
* Internet Explorer: Trident
* Firefox & other Mozilla browsers: Gecko
* Chrome & Opera 15+: Blink
* Chrome (iPhone) & Safari: Webkit
4. **Networking:** Component of the browser which retrieves the URLs using the common internet protocols of HTTP or FTP. The networking component handles all aspects of Internet communication and security. The network component may implement a cache of retrieved documents in order to reduce network traffic.
- Having the Holberton School's IP address is time to initiate the connection with it, this is done by following the HTTPS protocol you indicated in the URL. This protocol is the secure version of the Hypertext Transfer Protocol (HTTP) and it is part of a larger protocol suite called Transmission Control Protocol/Internet Protocol (TCP/IP).
- In TCP/IP, the connection is built between two hosts (the client and the server) using a process called TCP 3-way handshake. The process can be described in brief:

1. A client computer sends a SYN message means, whether the second computer is open for a new connection or not.

2. Then another computer, if open for a new connection, sends an acknowledge message with SYN message as well.

3. After this, the first computer receives the message and acknowledges it by sending an ACK message, that is received by the second computer and the TCP socket connection is established
![image](https://user-images.githubusercontent.com/12750852/201464865-37266f59-8e6a-4948-bf0f-2946918e3721.png)

5.** JavaScript Interpreter:** It is the component of the browser which interprets and executes the javascript code embedded in a website. The interpreted results are sent to the rendering engine for display. If the script is external then first the resource is fetched from the network. Parser keeps on hold until the script is executed.
6. **UI Backend:** UI backend is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. It underneath uses operating system user interface methods.
7. **Data Persistence/Storage:** This is a persistence layer. Browsers support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem. It is a small database created on the local drive of the computer where the browser is installed. It manages user data such as cache, cookies, bookmarks and preferences.
- The server response contains the web page you requested as well as the status code, compression type (Content-Encoding), how to cache the page (Cache-Control), any cookies to set, privacy information, etc.
![image](https://user-images.githubusercontent.com/12750852/201464977-2e26ee3a-f641-4a69-a83b-650d61bd51a9.png)
If you look at the above response, the first line shows a status code. This is quite important as it tells us the status of the response. There are five types of statuses detailed using a numerical code.

- [x] 1xx indicates an informational message only
- [x] 2xx indicates success of some kind
- [x] 3xx redirects the client to another URL
- [x] 4xx indicates an error on the client’s part
- [x] 5xx indicates an error on the server’s part

# The rendering engine
![image](https://user-images.githubusercontent.com/12750852/201465036-abff7483-2d28-4a6c-9aae-ec04c1d8bff3.png)

The rendering engine parses the chunks of HTML document and convert the elements to DOM nodes in a tree called the “content tree” or the “DOM tree”. It also parses both the external CSS files as well in style elements.

While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order. Firefox calls the elements in the render tree “frames”. WebKit uses the term renderer or render object.

After the construction of the render tree, it goes through a “layout process” of the render tree. When the renderer is created and added to the tree, it does not have a position and size. The process of calculating these values is called layout or reflow. This means giving each node the exact coordinates where it should appear on the screen. The position of the root renderer is 0,0 and its dimensions are the viewport–the visible part of the browser window. All renderers have a “layout” or “reflow” method, each renderer invokes the layout method of its children that need layout.

The next stage is painting. In the painting stage, the render tree is traversed and the renderer’s “paint()” method is called to display content on the screen. Painting uses the UI backend layer.

```
The rendering engine always tries to display the contents on the screen as soon as possible for better user experience. 
It does not wait for the HTML parsing to complete before starting to build and layout the render tree. 
It parses and displays the content it has received from the network, while rest of the contents stills keeps coming from the network.
```
