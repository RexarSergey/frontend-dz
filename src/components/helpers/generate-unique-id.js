export function generateUniqueId(data) {
    if(!data){
        return -1;
    }

   const maxId = Math.max(...data.map(it => it.commentId))

    return maxId + 1;
}