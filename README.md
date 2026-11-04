# Bonezegei_Scripting_Language
Developed by: Jofel A. Batutay

The Bonezegei Scripting Language (BSL) is a newly developed, dynamically typed programming language implemented through a custom interpreter written in the C language. It is designed primarily for rapid prototyping and the integration of embeddable logic within software systems. BSL features a simplified and intuitive syntax influenced by JavaScript and the C family of languages, promoting ease of adoption and efficient development. Despite its lightweight design, BSL is a fully Turing-complete language that supports essential modern programming constructs, including conditional and iterative control flows, user-defined functions, and object-oriented programming through class declarations, constructors, and methods. Source code is encapsulated within files using the unique .bzg extension, emphasizing the language’s self-contained architecture.


### Language Tutorials
1. [What is BSL](https://bonezegei.com/tutorials/bsl/whatisbsl)
2. [BSL Installation](https://bonezegei.com/tutorials/bsl/install)
3. [BSL Quick Start](https://bonezegei.com/tutorials/bsl/start)
4. [BSL Basics](https://bonezegei.com/tutorials/bsl/basics)
5. [BSL Control Flow](https://bonezegei.com/tutorials/bsl/control)
6. [BSL Data & Functions](https://bonezegei.com/tutorials/bsl/data_functions)
7. [BSL Object-Oriented Programming](https://bonezegei.com/tutorials/bsl/oop)
8. [BSL Standard Library](https://bonezegei.com/tutorials/bsl/stdlib)

### Requirements
  * Install the Latest Bonezegei Scripting Language

### Windows Installation
1. Open the Microsoft Store app from your Windows Start Menu.
2. Search for "Bonezegei Scripting Language".
3. Click the Get or Install button.
4. Wait for the download and installation to complete
  
  OR 
  
  Click the link below

  [![Get it from Microsoft](https://raw.githubusercontent.com/bonezegei/Bonezegei_Scripting_Language/refs/heads/main/documentation/images/ms-download.png)](https://apps.microsoft.com/store/detail/XP9LZSQ13RSLNN)

### Linux Installation
* [Linux x86 .deb](https://github.com/bonezegei/Bonezegei_Scripting_Language/raw/refs/heads/main/Release/Latest/Bonezegei-x86.deb)
  * Download the .deb installer
    ``` bash
    wget https://github.com/bonezegei/Bonezegei_Scripting_Language/raw/refs/heads/main/Release/Latest/Bonezegei-x86.deb
    ```
  * Run the command
    ``` bash
    sudo apt install ./Bonezegei-x86.deb
    ```
### Raspbian Raspberry Pi
* [Linux arm64 .deb](https://github.com/bonezegei/Bonezegei_Scripting_Language/raw/refs/heads/main/Release/Latest/Bonezegei-arm64.deb)
  * Download the .deb installer
    ``` bash
    wget https://github.com/bonezegei/Bonezegei_Scripting_Language/raw/refs/heads/main/Release/Latest/Bonezegei-arm64.deb
    ```
  * Run the command
    ``` bash
    sudo apt install ./Bonezegei-arm64.deb
    ```


### Verify Installation
  * Go to cmd or open terminal then type the commands. It should show the current version of the Interpreter
    * View current Version
      ```
      bonezegei --version
      ```
    * Test inline scripting
      ```
      bonezegei --inline "print(\"Hello World\");"
      ```      
    * Run Script
      ```
      bonezegei script_name.bzg
      ```     
### VSCode Usage
  1. Download and install Visual Studio Code.
  2. Open VS Code and navigate to the Extensions tab (or press Ctrl+Shift+X).
  3. Search for the "Bonezegei Scripting Language Formatter" extension.
  4. Click Install.
     
 * Once Installed
  1. Create New File with file extension .bzg (sxample script.bzg)
  2. Then Click "Run Script"


### Package / Library Installation
  * Packages or external Libraries are available via Bonezegei Package Installer. It is directly along with the interpreter. type the command 
  
    * View list of available packages
      ``` bash
      bzg -list
      ``` 
    * Install package/library
      ``` bash
      bzg install <package_name>
      ``` 
### Available Libraries
| No. | Name | Description | Supported OS / Arch | Latest Version |
|-----|------|-------------|---------------------|----------------|
| 1 | BSL_TestLib | Test Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_TestLib)](https://github.com/bonezegei/BSL_TestLib) |
| 2 | BSL_Pipe | Pipe Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Pipe)](https://github.com/bonezegei/BSL_Pipe) |
| 3 | BSL_Thread | Thread Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Thread)](https://github.com/bonezegei/BSL_Thread) |
| 4 | BSL_Socket | Network Socket | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Socket)](https://github.com/bonezegei/BSL_Socket) |
| 5 | BSL_HTTP | HTTP Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_HTTP)](https://github.com/bonezegei/BSL_HTTP) |
| 6 | BSL_HTTPS | HTTPS Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_HTTPS)](https://github.com/bonezegei/BSL_HTTPS) |
| 7 | BSL_Serial | Serial Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Serial)](https://github.com/bonezegei/BSL_Serial) |
| 8 | BSL_SQLite | SQLite Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_SQLite)](https://github.com/bonezegei/BSL_SQLite) |
| 9 | BSL_Base64 | Base64 Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Base64)](https://github.com/bonezegei/BSL_Base64) |
| 10 | BSL_Async | Async Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Async)](https://github.com/bonezegei/BSL_Async) |
| 11 | BSL_Hash | Hash Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Hash)](https://github.com/bonezegei/BSL_Hash) |
| 12 | BSL_Env | Environment Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Env)](https://github.com/bonezegei/BSL_Env) |
| 13 | BSL_Proxy | Proxy Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Proxy)](https://github.com/bonezegei/BSL_Proxy) |
| 14 | BSL_RegEx | Regular Expression Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_RegEx)](https://github.com/bonezegei/BSL_RegEx) |
| 15 | BSL_RNG | Random Number Generator | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_RNG)](https://github.com/bonezegei/BSL_RNG) |
| 16 | BSL_Time | Time Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Time)](https://github.com/bonezegei/BSL_Time) |
| 17 | BSL_Webview | Webview Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Webview)](https://github.com/bonezegei/BSL_Webview) |
| 18 | BSL_Bcrypt | Bcrypt Library | All | [![P](https://img.shields.io/github/v/release/bonezegei/BSL_Bcrypt)](https://github.com/bonezegei/BSL_Bcrypt) |
