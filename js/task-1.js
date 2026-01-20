
function slugify(title) {
  const slug = title.split(" ").join("-").toLowerCase();
  return slug;
}