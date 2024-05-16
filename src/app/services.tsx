export async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKE}`
    }
  }

  try {
    const res = await fetch(`${process.env.LOCALHOST}/api/benefit-blogs?populate=*`, options);
    const response = await res.json();
    return response;
    
  } catch (err) {
    console.error(err);
  }
}



export async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKE}`
    }
  }

  try {
    const res = await fetch(`${process.env.LOCALHOST}/api/benefit-categories?[fields][0]=name&[fields][1]=slug`, options);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}