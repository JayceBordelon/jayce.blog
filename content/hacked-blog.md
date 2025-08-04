I built a blog website. Then I rebuilt it to be more secure. Then I built it into an impenetrable fortress. Now I am
writing this with
more regrets and time wasted than any blog ever deserves. This post is nothing more than an anecdotal reflection on my
idiotic journey to a super simple blog website.

### Version 1 - Not Exactly an Informed Architecture

A few years ago, I learned **React** and decided that it was the best thing ever without first learning js. When all you
know is a Javascript framework (Technically a library? I really don't care), that becomes your hammer, and every project
in the world becomes a nail. So, I built out an entire [react router](https://reactrouter.com/) with navigation logic
for `/home`, `/posts`, `/posts/:id`, and `/admin/posts/:id/edit` for myself to actually create and update my posts. The
posts were stored in untyped (I did not know typescript even existed) JSON objects similar to the following:

```json
{
  "id": 0,
  "name": "Something controversial",
  "content": "The entirety of the body of the post. This often wrapped on for ~200 lines"
}
```

Then, my fancy functional component would read from `/posts.json` and manually build out semantic html from the content
of the file. Instead of just storing html in the content, I had the brilliant idea to instead search for elements (
like "\section/") and then parse them into formal html (`<section>`). This is not a joke. I legitimately thought this
pattern was efficient and clever. Not once did it cross my mind to store html directly in the body because my experience
and way of thinking was so deeply intertwined with JSON and how React works.

The admin page allowed me (and technically anyone) to open up existing posts and edit them. However, if the form had an
invalid value for the password field (**asserted client side with a hardcoded, plaintext password string**), the changes
would not save. Naturally, this was exploited in about a week because my repository was, of course, public. Every post
on the site (hosted on netlify) was changed to be a bunch of injection scripts within a month.

### Version 2 - Surely This is Secure

So, I decided that I needed to recreate the blog with security at the forefront of development. I stood up an entire
MongoDB cluster (riding that hype train) that I connected to from an express server to handle storing password
protected (stored in plaintext of course) profiles. I chose NoSQL because I truly thought JSON was the future of data
stores.

Because I was storing account information in my database, I decided it was appropriate to also move all the blog
contents and metadata to their own Mongo collections. Effectively, all I accomplished with this was moving JSON from a
json file to a cloud storage. The structure did not change, and I was still parsing the non html content the same as
before.

To update this now, I had an admin login! Because users could create accounts, I allowed myself to edit the documents if
I was logged in with a specific email. Because this was one of my first exposure to backend development, I assumed that
nothing on the server would ever be found out or seen. Of course, I was wrong. Having a check like the following ended
up being a kinda bad idea...

```javascript
function isAdminLogin(email, password) {
    return email === "admin@admin.com" && password = "adminpassword123"
}
```

Soon after deploying my blog v2 (I think it was literally like an hour),
a [fuzzing](https://github.com/JayceBordelon/CSE433-ffuf-fuzzing-project) bot found the admin login endpoint
and brute forced its way into my admin. It encrypted all the records with ransomware, and left a wonderful message:
"Give me 10 bitcoin and I will return your data". So, naturally, I sent him 10 bitcoin.

Just kidding. I was very sad though.

### Version 3 - The Fortress

This time around, **I WAS READY**! I had just completed a course all about web development and security practices.
Little to my knowledge, however, the course was severely outdated and employed some questionable measures. I effectively
rolled my own auth... I genuinely do not remember exactly how I did this, but I remember creating something similar
to [JWT Token](https://www.jwt.io/)
authentication. Unlike JWT Auth though, it was probably the most insecure authentication ever written. My hashing was a
[ceaser cipher](https://cryptii.com/pipes/caesar-cipher) that rotated chars a constant amount (I think I chose ROT7). I
also remember sending the key over the network in plaintext and only encrypting on the client before moving it into
`localStorage`. I would then have to, of course, unencrypt it to send the plain text token back. No refresh. No expiry.
These lil strings lived forever and were just flying around.

I did not change much else from the previous design except for migrating to PSQL from MongoDB, and
adding [Prisma ORM](https://www.prisma.io)
because I just had learned typescript but barely understood SQL syntax somehow.

By some miracle, this system was never exploited. It sat there statically for about a year while I was off learning and
building other stuff. I just recently revisted the code and had a heart attack.

### Version 4 - Reason

Now, I have built and deployed this entire blog with Next in 30 minutes. There is no auth, because why the hell was
there auth for a blog to begin with. The entire < 500 line project now just reads from static markdown and renders html
from it. Literally the only reason i'm on next instead of raw html is because I wanted vercel to handle all of my CI/CD
if I ever make a post again.

### TLDR

Don't add auth to your blog please.