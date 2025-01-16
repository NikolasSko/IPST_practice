type UserWithGadget = {
    id: string;
    name: string;
    gadget: {
        id: string;
        name: string;
        price: string | undefined;
    };
};

type UserWithGadgets = {
    id: string;
    name: string;
    gadgets: {
        id: string;
        name: string;
        price: string | undefined;
    }[];
};

const input: UserWithGadget[] = [
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "101", name: "Phone", price: "1000" },
    },
    {
        id: "2",
        name: "Khidir Karawita",
        gadget: { id: "102", name: "Tablet", price: undefined },
    },
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "103", name: "Laptop", price: "1500" },
    },
];

function groupGadgetsByUser(data: UserWithGadget[]): UserWithGadgets[] {
    const result: UserWithGadgets[] = [];

    const userMap: { [key: string]: UserWithGadgets } = {};

    for (const item of data) {
        if (userMap[item.id]) {
            userMap[item.id].gadgets.push(item.gadget);
        } else {
            userMap[item.id] = {
                id: item.id,
                name: item.name,
                gadgets: [item.gadget],
            };
        }
    }

    for (const userId in userMap) {
        result.push(userMap[userId]);
    }

    return result;
}

const output = groupGadgetsByUser(input);
console.log(JSON.stringify(output, null, 2));