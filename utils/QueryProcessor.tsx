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


  // Math operations - use eval for complex expressions
  if (query.includes("+") || query.includes("-") || query.includes("*") || query.includes("/") ||
      query.toLowerCase().includes("plus") || query.toLowerCase().includes("minus") ||
      query.toLowerCase().includes("multiplied") || query.toLowerCase().includes("times") ||
      query.toLowerCase().includes("divided")) {
    let mathQuery = query.toLowerCase()
      .replace(/plus/g, "+")
      .replace(/minus/g, "-")
      .replace(/times/g, "*")
      .replace(/multiplied by/g, "*")
      .replace(/divided by/g, "/");
    const mathExpr = mathQuery.match(/[\d\.\+\-\*\/\(\)\s]+/g);
    if (mathExpr) {
      try {
        const result = eval(mathExpr.join(''));
        return result.toString();
      } catch (e) {
        // If eval fails, return empty
      }
    }
  }
  return "default";

}
