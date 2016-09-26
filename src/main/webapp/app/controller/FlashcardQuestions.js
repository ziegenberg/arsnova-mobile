/*
 * This file is part of ARSnova Mobile.
 * Copyright (C) 2011-2012 Christian Thomas Weber
 * Copyright (C) 2012-2016 The ARSnova Team
 *
 * ARSnova Mobile is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ARSnova Mobile is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ARSnova Mobile.  If not, see <http://www.gnu.org/licenses/>.
 */
Ext.define("ARSnova.controller.FlashcardQuestions", {
	extend: 'ARSnova.controller.Questions',

	requires: ['ARSnova.model.Question'],

	config: {
		models: ['ARSnova.model.Question']
	},

	listQuestions: function () {
		var sTP = ARSnova.app.mainTabPanel.tabPanel.speakerTabPanel;
		sTP.newQuestionPanel.setVariant('flashcard');
		sTP.audienceQuestionPanel.setVariant('flashcard');
		sTP.audienceQuestionPanel.setController(this);
		sTP.showcaseQuestionPanel.setController(this);
		sTP.animateActiveItem(sTP.audienceQuestionPanel, 'slide');
	},

	flashcardIndex: function (options) {
		ARSnova.app.mainTabPanel.tabPanel.userQuestionsPanel.setFlashcardMode();
		ARSnova.app.mainTabPanel.tabPanel.userQuestionsPanel.toolbar.setTitle(Messages.FLASHCARDS);
		if (options && options.renew) {
			ARSnova.app.mainTabPanel.tabPanel.userQuestionsPanel.renew(options.ids);
		}
		ARSnova.app.mainTabPanel.tabPanel.animateActiveItem(ARSnova.app.mainTabPanel.tabPanel.userQuestionsPanel, 'slide');
	},

	destroyAll: function () {
		var question = Ext.create('ARSnova.model.Question');
		question.deleteAllFlashcards.apply(question, arguments);
	},

	deleteAllQuestionsAnswers: function (callbacks) {
		var question = Ext.create('ARSnova.model.Question');
		question.deleteAllFlashcardViews(sessionStorage.getItem("keyword"), callbacks);
	},

	getQuestions: function () {
		ARSnova.app.questionModel.getFlashcards.apply(ARSnova.app.questionModel, arguments);
	}
});
