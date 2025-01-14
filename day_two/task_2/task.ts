interface SourceData {
    user_id: string;
    full_name: string;
    contact: {
        phone: string;
        email: string;
    };
    address: {
        city: string;
        zip: string;
    };
    is_active: boolean;
}

interface TargetData {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: string;
}

function transformData(source: SourceData): TargetData {
    const { user_id, full_name, contact, address, is_active } = source;

    const id = user_id;
    const name = full_name;
    const phone = contact.phone;
    const email = contact.email;
    const location = [address.city, address.zip].join(", ");
    const status = is_active ? "active" : "inactive";

    return { id, name, phone, email, location, status };
}

const source: SourceData = {
    user_id: "123",
    full_name: "John Doe",
    contact: {
        phone: "+123456789",
        email: "john.doe@example.com",
    },
    address: {
        city: "New York",
        zip: "10001",
    },
    is_active: true,
};

console.log(transformData(source));