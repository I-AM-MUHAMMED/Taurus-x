FROM quay.io/lyfe00011/bot:beta

RUN git clone https://github.com/I-AM-MUHAMMED/Taurus-x.git /root/whatsAsena/ 
RUN mv /root/bottus/* /root/whatsAsena/
WORKDIR /root/whatsAsena/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/I-AM-MUHAMMED/media

CMD ["node", "bot.js"]
