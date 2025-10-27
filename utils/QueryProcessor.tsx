export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Eduardo";
  }

  if (query.toLowerCase().includes("age")) {
    return "67";
  }

  if (query.toLowerCase().includes("plus")) {

  const match = query.toLowerCase().match(/(\d+)\s*(plus|minus|times|divided by)\s*(\d+)/i);

  if (match) {
     const a = parseInt(match[1]);
     const op = match[2].toLowerCase();
     const b = parseInt(match[3]);
     let result: number;

     switch (op) {
     	    case "plus": result = a + b; break;
    	    case "minus": result = a - b; break;
    	    case "times": result = a * b; break;
    	    case "divided by": result = a / b; break;
     }
     return result;
     }
     }


  return "";
}
