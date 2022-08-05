class PrimeExt {
    constructor(runtime) {
        this.runtime = runtime;
    }
    
    getInfo() {
        return {
            id: "prime",
            name: "Prime",
            blocks: [
                {
                    blockType: "Boolean",
                    opcode: "prime",
                    text: "[a] Is Prime?",
                    arguments: {
                        a: {
                            type: "number",
                            defaultValue: "3"
                        }
                    }
                }
            ],
            menus: {}
        };
    }
    
    prime({a}) {
        if(a != 2 && a % 2 == 0) return false;
        
        if(a < 2) return false;
        
        for(let i = 3; i < Math.sqrt(a); i += 2) {
            if(a % i == 0) return false;
        }
        
        return true;
    }
}


(function() {
    var extensionInstance = new PrimeExt(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
