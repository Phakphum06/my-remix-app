import { useState, useEffect } from "react";

let nextId = 0;

function Modal({ card, onClose }) {
    if (!card) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-orange-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">รายละเอียดนามบัตร</h2>
                <p><strong>ID:</strong> {card.id}</p>
                <p><strong>ชื่อ-สกุล:</strong> {card.name}</p>
                <p><strong>ข้อมูลผู้ถือบัตร:</strong> {card.note}</p>
                {card.image && (
                    <div className="mt-4">
                        <img src={card.image} alt="Card" className="w-full h-auto object-cover" />
                    </div>
                )}
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600"
                >
                    ปิด
                </button>
            </div>
        </div>
    );
}

export default function CreateCard() {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [image, setImage] = useState(null);
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        return () => {
            cards.forEach(card => {
                if (card.image) {
                    URL.revokeObjectURL(card.image);
                }
            });
        };
    }, [cards]);

    const handleClickAdd = () => {
        if (name && note && image) {
            const imageUrl = URL.createObjectURL(image);
            setCards([
                ...cards,
                {
                    id: nextId++,
                    name: name,
                    note: note,
                    image: imageUrl
                }
            ]);
            setName('');
            setNote('');
            setImage(null);
        } else {
            alert("กรุณากรอกข้อมูลทั้งหมดและอัพโหลดภาพ.");
        }
    };

    const handleViewClick = (card) => {
        setSelectedCard(card);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="flex flex-col items-center p-4 bg-orange-100">
            <h1 className="text-2xl font-semibold mb-4 bg-orange-200 p-3 rounded-lg shadow-md text-orange-800">ข้อมูลนามบัตร</h1>
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <label className="block text-gray-700 font-medium mb-2">ชื่อ-สกุล:</label>
                <input
                    name='cName'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    type="text"
                />
                <label className="block text-gray-700 font-medium mb-2">ข้อมูลผู้ถือบัตร:</label>
                <textarea
                    name="cNote"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <label className="block text-gray-700 font-medium mb-2">อัพโหลดภาพ:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full mb-4"
                />
                <button
                    onClick={handleClickAdd}
                    className="bg-orange-300 text-black py-2 px-4 rounded-lg shadow-md hover:bg-orange-400">
                    เพิ่มข้อมูลนามบัตร
                </button>
            </div>
            <div className="w-full max-w-md mt-6">
                <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-orange-200 text-left">
                        <tr>
                            <th className="p-3 border-b text-orange-800">ID</th>
                            <th className="p-3 border-b text-orange-800">ชื่อ-สกุล</th>
                            <th className="p-3 border-b text-orange-800">ข้อมูลผู้ถือบัตร</th>
                            <th className="p-3 border-b text-orange-800">รูปภาพ</th>
                            <th className="p-3 border-b text-orange-800">ตรวจสอบ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.length > 0 ? (
                            cards.map(card => (
                                <tr key={card.id} className="hover:bg-gray-50">
                                    <td className="p-3 border-b text-gray-600">{card.id}</td>
                                    <td className="p-3 border-b text-gray-600">{card.name}</td>
                                    <td className="p-3 border-b text-gray-600">{card.note}</td>
                                    <td className="p-3 border-b text-gray-600">
                                        {card.image && <img src={card.image} alt="Card" className="w-16 h-16 object-cover" />}
                                    </td>
                                    <td className="p-3 border-b text-gray-600">
                                        <button
                                            onClick={() => handleViewClick(card)}
                                            className="bg-blue-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-blue-600"
                                        >
                                            ดู
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Modal card={selectedCard} onClose={handleCloseModal} />
        </div>
    );
}
