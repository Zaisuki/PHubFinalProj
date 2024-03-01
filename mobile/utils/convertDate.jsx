export const convertDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    
    const minutes = Math.floor(diffMs / (1000 * 60));
    
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
      const hours = Math.floor(minutes / 60);
      
      if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
      } else {
        const days = Math.floor(hours / 24);
        
        if (days < 7) {
          return `${days} day${days !== 1 ? 's' : ''} ago`;
        } else {
          const weeks = Math.floor(days / 7);
          if (weeks < 4) {
            return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
          } else {
            const months = Math.floor(weeks / 4);
            return `${months} month${months !== 1 ? 's' : ''} ago`;
          }
        }
      }
    }
};
