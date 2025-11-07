### structure
* name : package_name 
* arch : x86, arm, all      
* os   : linux, win, all
* url  : https://directory

### package executable

``` bash
bzg install <package_name>
```

### directory structure

``` text
.
├── script.bzg                   # main script
└── lib /                        # library folder
    ├── package_name.bzg         # loader script
    └── package_name /           # dedicated library
        └──package_name.dll/.so  # dll for windows so for linux 
```
