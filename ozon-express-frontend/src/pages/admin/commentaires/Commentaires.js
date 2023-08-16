import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import CommentaireService from 'services/CommentaireService';
import HttpClient from 'services/client/HttpClient';

function Commentaires() {

    const commentaireService = new CommentaireService(HttpClient)

    const [commentaires, setCommentaires] = useState([]);

    useEffect(() => {
        const fetchCommentaires = async () => {
            try {
                const commentaires = await commentaireService.getCommentaires()
                setCommentaires(commentaires)
            } catch (error) {
                console.error(error)
            }
        }

        fetchCommentaires()
    }, []);

    const deleteCommentaire = async (id) => {
        try {
            const res = await commentaireService.deleteCommentaire(id)
            if (res) {
                setCommentaires(commentaires => commentaires.filter(commentaire => commentaire.id !== id));
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='flex flex-col items-end pt-3 px-5'>
            <div className='grid grid-cols-1 w-full'>
                <Card cardTitle={'Commentaires'} items={commentaires} />
            </div>
        </div>
    )
}

export default Commentaires