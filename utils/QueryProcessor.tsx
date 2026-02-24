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

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/-?\d+/g)?.map((value) => Number(value)) ?? [];
    if (numbers.length > 0) {
      const maxValue = Math.max(...numbers);
      return String(maxValue);
    }
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

// Find number that is both square and cube
  if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      for (const numStr of numbers) {
        const num = parseInt(numStr);
        const sixthRoot = Math.round(Math.pow(num, 1/6));
        if (Math.pow(sixthRoot, 6) === num) {
          return num.toString();
        }
      }
    }
  }

  // Find prime numbers
  if (query.toLowerCase().includes("prime")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const isPrime = (n: number) => {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
          if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
      };
      const primes = numbers.filter(numStr => isPrime(parseInt(numStr))).map(n => parseInt(n));
      if (primes.length > 0) {
        return primes.join(', ');
      }
    }
  }
  return "default";

}
