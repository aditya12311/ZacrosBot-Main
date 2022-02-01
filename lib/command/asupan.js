cmd.on("ceweindo", ["indo"], ["asupan"], async (msg, { client }) => {
  return client.sendImage(
    msg.from,
    botinfo.linkApi.zacros + "/asupan/indonesia/"
  );
});

cmd.on("cewevietnam", ["vietnam"], ["asupan"], async (msg, { client }) => {
  return client.sendImage(
    msg.from,
    botinfo.linkApi.zacros + "/asupan/vietnam/"
  );
});

cmd.on("cewemalaysia", ["malaysia"], ["asupan"], async (msg, { client }) => {
  return client.sendImage(
    msg.from,
    botinfo.linkApi.zacros + "/asupan/malaysia/"
  );
});

cmd.on("cewekorea", ["korea"], ["asupan"], async (msg, { client }) => {
  return client.sendImage(msg.from, botinfo.linkApi.zacros + "/asupan/korea/");
});

cmd.on("cewejepang", ["jepang"], ["asupan"], async (msg, { client }) => {
  return client.sendImage(msg.from, botinfo.linkApi.zacros + "/asupan/japan/");
});

cmd.on("cewethailand", ["thailand"], ["asupan"], async (msg, { client }) => {
  return client.sendImage(
    msg.from,
    botinfo.linkApi.zacros + "/asupan/thailand/"
  );
});

cmd.on("cewechina", ["china"], ["asupan"], async (msg, { client }) => {
  return client.sendImage(msg.from, botinfo.linkApi.zacros + "/asupan/china/");
});

cmd.on("cewecantik", ["cecan"], ["asupan"], async (msg, { client }) => {
  return client.sendImage(msg.from, botinfo.linkApi.zacros + "/asupan/cecan/");
});

cmd.on("ukhty", ["ukhty"], ["asupan"], async (msg, { client }) => {
  return client.sendVideo(msg.from, botinfo.linkApi.zacros + "/asupan/ukhty/");
});

cmd.on("santuy", ["santuy"], ["asupan"], async (msg, { client }) => {
  return client.sendVideo(msg.from, botinfo.linkApi.zacros + "/asupan/santuy/");
});

cmd.on("loli", ["loli"], ["asupan"], async (msg, { client }) => {
  return client.sendVideo(msg.from, botinfo.linkApi.zacros + "/asupan/loli/");
});

cmd.on("randomvid", ["random"], ["asupan"], async (msg, { client }) => {
  return client.sendVideo(msg.from, botinfo.linkApi.zacros + "/asupan/random");
});

cmd.on("hijaber", ["hijaber"], ["asupan"], async (msg, { client }) => {
  return client.sendImage(
    msg.from,
    botinfo.linkApi.zacros + "/asupan/hijaber/");
});

cmd.on(
    "nhentaipdf",
    ["hentai search"],
    ["nsfw"],
    async (msg, { query, client }) => {
      res = await functions.axios.get(
        `${botinfo.linkApi.zacros}/nsfw/nHentaiSearch?query=miku$`
      );
      let anu = res.data.result;
      let b = ``;
      for (let c of anu)
        b += functions.parseResult(c, { title: "nhentai" }) + "\n";
      return client.sendText(msg.from, b.trim());
    },
    { query: "Isi nama hentai/code!", param: functions.needed("query") }
  );
