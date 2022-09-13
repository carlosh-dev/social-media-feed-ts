
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'


interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Contents {
    content: string;
    type: "link" | "paragraph";
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    contents: Contents[];
}

export function Post({ author, publishedAt, contents }:PostProps) {

    const [comments, setComments] = useState([ 'Post muito legal!' ]);

    const [ newCommentText, setNewCommentText ] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

    const publishedDaterelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event:FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    };

    function handleNewCommmentChange(event:ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function handleInvalidComment(event:InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório.')
    }

    function onDeleteComment(commentDeleted:string) {
        const commentsWithoutDeleted = comments.filter(comment => {
            return comment != commentDeleted;
        });

        setComments(commentsWithoutDeleted);
    }


    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>
                            {author.name}
                        </strong>
                        <span>
                            {author.role}
                        </span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toString()}>
                    {publishedDaterelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {contents.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <a key={line.content} href='#'>{line.content}</a>
                    }
                })}
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    placeholder='Deixe um comentário' 
                    value={newCommentText}
                    onChange={handleNewCommmentChange}
                    required
                    onInvalid={handleInvalidComment}
                />

                <footer>
                    <button type='submit'disabled={isNewCommentEmpty} >Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map( comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={onDeleteComment}/>
                })}
            </div>
        </article>
    )
}