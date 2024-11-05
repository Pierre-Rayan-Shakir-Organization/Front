'use client';

import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '@/app/contexts/AuthContext.context';
import { X } from 'lucide-react';

interface DeleteButtonProps {
    cardId: string;
    onDelete: (cardId: string) => void; // Callback to notify parent of deletion
}

export default function DeleteButton({ cardId, onDelete }: DeleteButtonProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {token} = useAuth();

    const handleDelete = async () => {
        setLoading(true);
        setError(null);
        try {
            const url = `http://localhost:3000/deleteMusic/${cardId}`;
            await axios.delete(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            onDelete(cardId); // Notify parent to remove card from display
        } catch (err) {
            setError('Failed to delete the music. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="btn btn-circle btn-secondary btn-sm"
        >
            <X />
        </button>
    );
}
