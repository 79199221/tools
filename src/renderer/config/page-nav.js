const pageRoute = [
    {
        label: "Favorites",
        icon: "",
        path: "@/pages",
        children: [
            {
                label: "Application",
                icon: "download",
                path: "/index"
            }, {
                label: "Website",
                icon: "cloud",
                path: "/index"
            }, {
                label: "Dirctory",
                icon: "folder",
                path: "/index"
            }, {
                label: "Files",
                icon: "signal",
                path: "/#"
            }
        ]
    }, {
        label: "Favorites1",
        icon: "",
        path: "@/pages",
        children: [
            {
                label: "Application",
                icon: "print",
                path: "/index"
            }, {
                label: "Website",
                icon: "",
                path: "/index"
            }, {
                label: "Dirctory",
                icon: "",
                path: "/index"
            }, {
                label: "Files",
                icon: "",
                path: "/index"
            }
        ]
    }
]

define(()=>{ return pageRoute })