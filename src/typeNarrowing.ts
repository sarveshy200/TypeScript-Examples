function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai`;
    }
    return `Making ${kind} cups of chai`;
}

function severChai(msg?: string) {
    if (msg) {
        return `Severing chai: ${msg}`;
    }
    return "Severing chai with no message";
}

function orderChai(size: "small" | "medium" | "large"| number){
    if(size === "small"){
        return "Ordering a small chai";
    }
    if(size === "medium"|| size === "large"){
        return `Ordering a ${size} chai`;
    }

    return `Ordering ${size} cups of chai`;
} 

class KulhadChai {
    serve(){
        return "Serving chai in a kulhad";
    }
}

class CuttingChai {
    serve(){
        return "Serving cutting chai in a glass";
    }
}

function serveChai(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any): obj is ChaiOrder {
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function seveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving order of ${item.type} chai with ${item.sugar} sugar(s)`;
    }
    return `Serving special order: ${item}`;
}

type MasalaChai = {
    type: "masala";
    spicelevel: number
};

type AdrakChai = {
    type: "adrak";
    gingerAmount: number
};

type ElaichiChai = {
    type: "elaichi";
    cardamomPods: number
};

type ChaiVariant = MasalaChai | AdrakChai | ElaichiChai;

function prepareChai(variant: ChaiVariant) {
    switch (variant.type) {
        case "masala":
            return `Preparing masala chai with spice level ${variant.spicelevel}`;
        case "adrak":
            return `Preparing adrak chai with ginger amount ${variant.gingerAmount}`;
        case "elaichi":
            return `Preparing elaichi chai with ${variant.cardamomPods} cardamom pods`;
    }
}


function isStringArray(arr:unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}