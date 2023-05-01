import articlesModel from "../models/articles.model.js";
import _ from "lodash";

class ArticlesController {
  async index(req, res) {
    var articles = await articlesModel.find();
    return res.json({
      articles,
    });
  }
  async store(req, res) {
    var article = new articlesModel({
      title: req.body.title,
      user_id: req.body.user_id,
      category: req.body.category,
      content: req.body.content,
    });
    try {
      article = await article.save();
    } catch (error) {
      return res.json(error);
    }
    return res.json(article);
  }
  async create(req, res) {
    return res.json();
  }

  async show(req, res) {
    return res.json();
  }

  async edit(req, res) {
    return res.json();
  }

  async update(req, res) {
    var article = await articlesModel.findById(req.params.id);
    if (!article) {
      return res.status(404).json({
        article: "The Article is not found",
      });
    }

    article = await articlesModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: _.get(req.body, "title", article.title),
        user_id: _.get(req.body, "user_id", article.user_id),
        category: _.get(req.body, "category", article.category),
        content: _.get(req.body, "content", article.content),
      }
    );
    article = await articlesModel.findById(req.params.id);

    return res.json(article);
  }

  async destroy(req, res) {
    var article = await articlesModel.findById(req.params.id);
    await articlesModel.deleteOne({ _id: req.params.id });

    return res.json(article);
  }

  async view(req, res) {
    return res.json();
  }

  async grid(req, res) {
    return res.json();
  }

  async form(req, res) {
    return res.json();
  }
}

export default new ArticlesController();
