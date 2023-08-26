import { useEffect, useState } from 'react'
import Card from '../components/Card'
import CommentaireService from 'services/CommentaireService';
import HttpClient from 'services/client/HttpClient';
import PreloaderSpinner from 'components/PreloaderSpinner';

function Commentaires() {

    const commentaireService = new CommentaireService(HttpClient)

    const [commentaires, setCommentaires] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const fetchCommentaires = async () => {
            try {
                const commentaires = await commentaireService.getCommentaires()
                if (commentaires) setCommentaires(commentaires)
            } catch (error) {
                setErrMsg(error)
            }
        }

        fetchCommentaires()
    }, []);

    useEffect(() => {
        if (commentaires[0]) setIsLoading(false);
    }, [commentaires]);

    const deleteCommentaire = async (id) => {
        try {
            const res = await commentaireService.deleteCommentaire(id)
            if (res) {
                setCommentaires(commentaires => commentaires.filter(commentaire => commentaire.id !== id));
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {isLoading ?
                <PreloaderSpinner />
                :
                <div className='flex flex-col items-end pt-3 px-5'>
                    <div className='grid grid-cols-1 w-full'>
                        <Card cardTitle={'Commentaires'} items={commentaires} errMsg={errMsg} />
                    </div>
                </div>
            }
        </>
    )
}

export default Commentaires