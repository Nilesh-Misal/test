TREE STRUCTURE:-
================

[View directly the final JSON](#final-json)

```console
H:\RISHIKESHAGRAWANI\PROJECTS\GENWORK\DOCS
│   DIVI-BUILDER.md
│   libraries.docx
│   NW-or-Electron-or-Any.txt
│   TAMIM-SIR-MESSAGES.md
│
├───Installers
└───Planning-for-generator-modules
    │   computational_code
    │   table.md
    │
    └───Discussions
            Timeline.md

```

JSON FORM:-
===========

```javascript
	{
		"root-path": "H:\\RISHIKESHAGRAWANI\\PROJECTS\\GENWORK\\DOCS",
		"root-name": "DOCS",
		"icon-close": "../assets/images/icons/folderClosed.svg",
		"icon-open": "../assets/images/icons/folderOpened.svg",

		"children": {
			[
				{
					"name": "DIVI-BUILDER.md",
					"icon": "../assets/images/icons/md.svg"
					"isDir": false,
				},
				{
					"name": "libraries.docx",
					"icon": "../assets/images/icons/docx.svg"
					"isDir": false,
				},
				{
					"name": "NW-or-Electron-or-Any.txt",
					"icon": "../assets/images/icons/txt.svg",
					"isDir": false,
				},
				{
					"name": "TAMIM-SIR-MESSAGES.md",
					"icon": "../assets/images/icons/md.svg",
					"isDir": false,
				},
				{
					"name": "Installers",
					"isDir": true,
					"contents": []
				},
				{
					"name": "Planning-for-generator-modules",
					"isDir": true,
					"contents": [
						{
							"name": "computational_code",
							"isDir": false,
							"icon": "../assets/images/icons/noExtension.svg"
						},
						{
							"name": "table.md",
							"isDir": false,
							"icon": "../assets/images/icons/md.svg"
						},
						{
							"name": "Discussions",
							"isDir": true,
							"contents": [
								{
									"name": "Timeline.md",
									"icon": "../assets/images/icons/md.svg"
									"isDir": false,
									"contents": []
								}
							]
						}
					]
				}
			]
		}
	}
```

ANOTHER FORM:-
==============

```javascript
	{
		"root-path": "H:\\RISHIKESHAGRAWANI\\PROJECTS\\GENWORK\\DOCS",
		"root-name": "DOCS",
		"icon-close": "../assets/images/icons/folderClosed.svg",
		"icon-open": "../assets/images/icons/folderOpened.svg",

		"children": {
			[
				{
					"name": "DIVI-BUILDER.md",
					"icon": "../assets/images/icons/md.svg"
					"isDir": false,
					"contents": []
				},
				{
					"name": "libraries.docx",
					"icon": "../assets/images/icons/docx.svg"
					"isDir": false,
					"contents": []
				},
				{
					"name": "NW-or-Electron-or-Any.txt",
					"icon": "../assets/images/icons/txt.svg",
					"isDir": false,
					"contents": []
				},
				{
					"name": "TAMIM-SIR-MESSAGES.md",
					"icon": "../assets/images/icons/md.svg",
					"isDir": false,
					"contents": []
				},
				{
					"name": "Installers",
					"isDir": true,
					"contents": []
				},
				{
					"name": "Planning-for-generator-modules",
					"isDir": true,
					"contents": [
						{
							"name": "computational_code",
							"isDir": false,
							"contents": [],
							"icon": "../assets/images/icons/noExtension.svg"
						},
						{
							"name": "table.md",
							"isDir": false,
							"contents": [],
							"icon": "../assets/images/icons/md.svg"
						},
						{
							"name": "Discussions",
							"isDir": true,
							"contents": [
								{
									"name": "Timeline.md",
									"icon": "../assets/images/icons/md.svg"
									"isDir": false,
									"contents": []
								}
							]
						}
					]
				}
			]
		}
	}
```

<h3 id="final-json">FINAL ONE </h3>

I THINK THE FOLLOWING STRUCTURE WOULD BE MORE COMPACT THAN THE PREVIOUS ONE:-
============================================================================

### Direct small view

```javascript
{
	...
	...
	...
	"children": {
		"dirs": [ 
					...
					...
				],
		"files": [ 
					... 
					...
				]
	}
}
```

### Now

```javascript
	{
		"dirs": [
				{
					"name": "Installers",
					"isDir": true,
					"contents": []
				}
		]
		...
		...
	}
```

Changed to

```javascript
	{
		"dirs": [
				{
					"name": "Installers",
					"contents": []
				}
		]
		...
		...
	}
```

> ## Detailed view (Final one)

```javascript
	{
		"root-path": "H:\\RISHIKESHAGRAWANI\\PROJECTS\\GENWORK\\DOCS",
		"root-name": "DOCS",
		"icon-dir-closed": "../assets/images/icons/folderClosed.svg",
		"icon-dir-opened": "../assets/images/icons/folderOpened.svg",

		"children": {
			"dirs": [
				{
					"name": "Installers",
					"children": []
				},
				{
					"name": "Planning-for-generator-modules",
					"children": {
						"dirs": [
							{
								"name": "Discussions",
								"children": {
									"dirs": [],
									"files": [
										{
											"name": "Timeline.md",
											"icon": "../assets/images/icons/md.svg",
										}
									]
								}
							}
						],
						"files": [
							{
								"name": "computational_code",
								"icon": "../assets/images/icons/noExtension.svg"
							},
							{
								"name": "table.md",
								"icon": "../assets/images/icons/md.svg"
							}
						]
					}
				}
			],

			"files": [
				{
					"name": "DIVI-BUILDER.md",
					"icon": "../assets/images/icons/md.svg"
				},
				{
					"name": "libraries.docx",
					"icon": "../assets/images/icons/docx.svg"
				},
				{
					"name": "NW-or-Electron-or-Any.txt",
					"icon": "../assets/images/icons/txt.svg"
				},
				{
					"name": "TAMIM-SIR-MESSAGES.md",
					"icon": "../assets/images/icons/md.svg"
				}
			]
		}
	}
```