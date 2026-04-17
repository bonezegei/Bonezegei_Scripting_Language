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

### Verify Installation
  * Go to cmd or open terminal then type the commands. It should show the current version of the Interpreter
    * View current Version
      ```
      bonezegei --version
      ```
    * Test inline scripting
      ```
      bonezegei -inline "print(\"Hello World\");"
      ```      
    * Run Script
      ```
      bonezegei script_name.bzg
      ```     
### VSCode Usage
  * Create New File with file extension .bzg (sxample script.bzg)
  * Then Click "Run Script"


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


