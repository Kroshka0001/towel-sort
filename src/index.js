// You should implement your task here.

module.exports = function towelSort (mtx) {
	
  if (!mtx) return [];
  
  let mtxs = []
  
  for (let i = 0; i < mtx.length; i++) {
	  
    if (i % 2) {    
	
      mtxs.push(mtx[i].reverse())   
	  
    } else {
		
      mtxs.push(mtx[i])
	  
    }
	
  }
  
  return mtxs.flat()
  
}
