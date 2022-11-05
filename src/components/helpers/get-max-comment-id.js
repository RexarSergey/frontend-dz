export function getMaxCommentId(data) {
    if(!data){
        return -1;
    }

    let max = -1

    data.forEach(element => {
        if (element.commentId > max) {
            max = element.commentId
        }
    })

    return max + 1;
}