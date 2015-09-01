walk(document.body)

function walk(node) {
	// stolen from http://is.gd/mwZp7E
	var child, next

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild
			while (child) {
				next = child.nextSibling
				walk(child)
				child = next
			}
			break

		case 3: // Text node
			handleText(node)
			break
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue

	v = v.replace(/\bThought Leader\b/g, "Thought Haver")
	v = v.replace(/\bThought leader\b/g, "Thought haver")
	v = v.replace(/\bthought Leader\b/g, "thought Haver")
	v = v.replace(/\bthought leader\b/g, "thought haver")
	v = v.replace(/\bthought leadership\b/gi, "thought haverness")

	textNode.nodeValue = v
}
